import { postAxios } from "../utils/axios";

// 이메일 중복 확인
export const checkEmailAvailability = async (
  email: string,
): Promise<boolean> => {
  try {
    const response = await postAxios("/users/email", { email });
    return response.data.valid;
  } catch (error) {
    console.error("Error checking email availability:", error);
    return false;
  }
};

// 닉네임 중복 확인
export const checkNicknameAvailability = async (
  nickname: string,
): Promise<boolean> => {
  try {
    const response = await postAxios("/users/nickname", { nickname });
    return response.data.valid;
  } catch (error) {
    console.error("Error checking nickname availability:", error);
    return false;
  }
};
