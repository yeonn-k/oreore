import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./UserDataEdit.styled";
import { useNavigate } from "react-router-dom";
import ROUTE_LINK from "../../routes/RouterLink";
import { Label } from "../../components/InputField/InputFiled.styled";
import { Nav, FormContainer, InputField } from "components";
import useAuthStore from "../../stores/useAuthStore";
import AddressSearch from "./AddressSearch/AddressSearch";
import { toast } from "react-toastify";
import useHandleImageChange from "../../hooks/useHandleImageChange";

export interface FormValues {
  phoneFirst: string;
  phoneSecond: string;
  postalCode: string;
  address: string;
  detailAddress: string;
  profileImage?: File;
}

export default function UserDataEditPage() {
  const { user, updateUserProfile } = useAuthStore();
  const methods = useForm<FormValues>();
  const navigate = useNavigate();

  const { setValue, clearErrors } = methods;

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const { imgInputRef, preview, hasFile, handleImageChange } =
    useHandleImageChange("profile");

  useEffect(() => {
    if (user) {
      const phoneFirst = user.phone?.slice(0, 3) || "";
      const phoneSecond = user.phone?.slice(3) || "";

      setValue("phoneFirst", phoneFirst);
      setValue("phoneSecond", phoneSecond);
      setValue("postalCode", user.postalCode || "");
      setValue("address", user.basicAdd || "");
      setValue("detailAddress", user.detailAdd || "");

      if (user.profileImage) {
        setProfileImage(user.profileImage as unknown as File);
      }
    }
  }, [user, setValue]);

  const onSubmit = async (data: FormValues) => {
    const formattedPhone = `${data.phoneFirst}${data.phoneSecond}`;
    const payload = {
      phone: formattedPhone,
      postalCode: data.postalCode,
      basicAdd: data.address,
      detailAdd: data.detailAddress,
      image: hasFile ? preview : "",
    };

    try {
      await updateUserProfile(payload);
      navigate(ROUTE_LINK.MYPAGE.path);
      toast.success("✨회원 정보가 수정되었습니다.");
    } catch (error) {
      console.error("회원 정보 수정 실패:", error);
      toast.error("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleProfilePictureDelete = () => {
    setProfileImage(null);
    alert("프로필 사진이 초기화되었습니다.");
  };

  return (
    <>
      <Nav />
      <S.Container>
        <FormContainer onSubmit={onSubmit} methods={methods}>
          <S.Title>회원정보 수정</S.Title>

          <Label>프로필 사진</Label>
          <S.ProfilePicture>
            {profileImage ? (
              <S.ProfileImage
                src={hasFile ? preview : "/icons/profile.svg"}
                alt="Profile"
              />
            ) : (
              <S.ProfileImage
                src={hasFile ? preview : "/icons/profile.svg"}
                alt="Profile"
              />
            )}
          </S.ProfilePicture>
          <S.InputContainer>
            <S.FileInputLabel>
              사진 변경
              <S.FileInput
                type="file"
                accept="image/*"
                ref={imgInputRef}
                onChange={handleImageChange}
              />
            </S.FileInputLabel>
            <S.FileButton type="button" onClick={handleProfilePictureDelete}>
              삭제
            </S.FileButton>
          </S.InputContainer>

          <S.InputContainer style={{ gap: "10px" }}>
            <InputField
              name="phoneFirst"
              label="전화번호"
              placeholder="앞자리"
            />
            <InputField name="phoneSecond" placeholder="나머지 번호" />
          </S.InputContainer>

          <div>
            <S.InputContainer style={{ marginBottom: "10px" }}>
              <InputField
                name="postalCode"
                label="우편번호"
                placeholder="우편번호를 입력하세요"
                readOnly
              />
              <AddressSearch setValue={setValue} clearErrors={clearErrors} />
            </S.InputContainer>
            <S.InputContainer style={{ flexDirection: "column", gap: "10px" }}>
              <InputField
                name="address"
                placeholder="주소를 입력하세요"
                readOnly
              />
              <InputField
                name="detailAddress"
                placeholder="상세 주소를 입력하세요"
              />
            </S.InputContainer>
          </div>

          <S.SubmitButton type="submit">수정하기</S.SubmitButton>
        </FormContainer>
      </S.Container>
    </>
  );
}
