import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./PasswordCheck.styled";
import { useNavigate } from "react-router-dom";
import ROUTE_LINK from "../../routes/RouterLink";
import { Nav, FormContainer, InputField } from "components";
import useAuthStore from "../../stores/useAuthStore";

interface FormValues {
  password: string;
}

export default function PasswordCheckPage() {
  const navigate = useNavigate();
  const methods = useForm<FormValues>();

  const checkPassword = useAuthStore((state) => state.checkPassword);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const isValid = await checkPassword(data.password);
      if (isValid) {
        navigate(ROUTE_LINK.INFO_EDIT.path);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("비밀번호 확인 실패:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <Nav />
      <S.Container>
        <FormContainer onSubmit={onSubmit} methods={methods}>
          <S.Title>비밀번호 입력</S.Title>

          <S.InputContainer>
            <InputField name="password" label="비밀번호" type="password" />
          </S.InputContainer>

          <S.SubmitButton type="submit">내 정보 조회하기</S.SubmitButton>
        </FormContainer>
      </S.Container>
    </>
  );
}
