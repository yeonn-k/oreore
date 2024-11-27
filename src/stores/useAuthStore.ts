import { create } from "zustand";
import { persist } from "zustand/middleware";
import { postAxios, putAxios } from "../utils/axios";
import { toast } from "react-toastify";

interface UserProfile {
  id?: string;
  nickname?: string;
  email?: string;
  name?: string;
  image?: string;
  phone?: string;
  postalCode?: string;
  basicAdd?: string;
  detailAdd?: string;
  profileImage?: File;
}

interface UserState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: {
    email: string;
    password: string;
    name: string;
    nickname: string;
    phone: string;
    postalCode: string;
    basicAdd: string;
    detailAdd: string;
  }) => Promise<void>;
  checkPassword: (password: string) => Promise<boolean>;
  updateUserProfile: (data: UserProfile, profileImage?: File) => Promise<void>;
}

const useAuthStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      login: async (email, password) => {
        try {
          const response = await postAxios("/auth/signin", {
            email,
            password,
          });
          const { user, token } = response.data;

          if (!token) {
            throw new Error("서버로부터 토큰이 발급되지 않았습니다.");
          }

          localStorage.setItem("token", token);

          set({
            isAuthenticated: true,
            user: {
              id: user._id,
              nickname: user.nickname,
              email: user.email,
              name: user.name,
              image: user.image,
              phone: user.phone,
              postalCode: user.postalCode || "",
              basicAdd: user.basicAdd || "",
              detailAdd: user.detailAdd || "",
            },
          });

          console.log("로그인 성공:", user);
        } catch (error) {
          console.error("Login failed:", error);
          throw error;
        }
      },

      logout: () => {
        set({ isAuthenticated: false, user: null });
        localStorage.removeItem("token");
        localStorage.removeItem("auth-storage");
        localStorage.removeItem("products");
        localStorage.removeItem("orderInfo");
        toast.info("로그아웃 되었습니다 !");
      },

      register: async (userData) => {
        try {
          await postAxios("/auth/signup", userData);
          console.log("Registration successful");
        } catch (error) {
          console.error("Registration failed:", error);
          throw error;
        }
      },

      checkPassword: async (password) => {
        try {
          const response = await postAxios("/users/password", {
            password,
          });
          return response.data.valid;
        } catch (error) {
          console.error("Password check failed:", error);
          throw error;
        }
      },

      updateUserProfile: async (data: UserProfile) => {
        try {
          const response = await putAxios("/users/my", data);
          const updatedUser = response.data;

          set((state) => {
            const newUser = {
              ...state.user,
              ...updatedUser,
            };

            const authStorage = JSON.parse(
              localStorage.getItem("auth-storage") || "{}",
            );
            if (authStorage.state) {
              authStorage.state.user = newUser;
              localStorage.setItem("auth-storage", JSON.stringify(authStorage));
            }

            return { user: newUser };
          });
          console.log("회원 정보 수정 성공:", updatedUser);
        } catch (error) {
          console.error("Update user profile failed:", error);
          throw error;
        }
      },
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
