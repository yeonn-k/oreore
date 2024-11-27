import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./Signup.styled";
import { Nav, FormContainer, InputField } from "components";
import useAuthStore from "../../stores/useAuthStore";
import AddressSearch from "./AddressSearch/AddressSearch";
import {
  checkEmailAvailability,
  checkNicknameAvailability,
} from "../../utils/userValidation";
import { useNavigate } from "react-router-dom";
import ROUTE_LINK from "../../routes/RouterLink";
import { toast } from "react-toastify";

export interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  nickname: string;
  phoneFirst: string;
  phoneSecond: string;
  postalCode: string;
  address: string;
  detailAddress: string;
}

export default function SignupPage() {
  const methods = useForm<FormValues>();
  const registerUser = useAuthStore((state) => state.register);

  const navigate = useNavigate();

  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = methods;

  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [nicknameValid, setNicknameValid] = useState<boolean | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formattedPhone = `${data.phoneFirst}${data.phoneSecond}`;
    const payload = {
      email: data.email,
      password: data.password,
      name: data.name,
      nickname: data.nickname,
      phone: formattedPhone,
      postalCode: data.postalCode,
      basicAdd: data.address,
      detailAdd: data.detailAddress,
    };

    try {
      await registerUser(payload);
      toast.info("회원가입이 완료되었습니다.");
      navigate(ROUTE_LINK.LOGIN.path);
    } catch (error: unknown) {
      console.error("회원가입 실패:", error);
      toast.error("회원가입에 실패했습니다.");
    }
  };

  const checkEmail = async () => {
    const email = watch("email");
    if (!email) {
      toast.warn("이메일을 입력해주세요.");
      return;
    }

    const isAvailable = await checkEmailAvailability(email);
    setEmailValid(isAvailable);
  };

  const checkNickname = async () => {
    const nickname = watch("nickname");
    if (!nickname) {
      toast.warn("닉네임을 입력해주세요.");
      return;
    }

    const isAvailable = await checkNicknameAvailability(nickname);
    setNicknameValid(isAvailable);
  };

  return (
    <>
      <Nav />
      <S.Container>
        <FormContainer onSubmit={onSubmit} methods={methods}>
          <S.Title>회원가입</S.Title>

          <S.InputContainer>
            <InputField
              name="email"
              label="이메일"
              placeholder="아이디를 입력하세요."
            />
            <S.CheckButton type="button" onClick={checkEmail}>
              중복확인
            </S.CheckButton>
          </S.InputContainer>
          {emailValid === true && (
            <S.HelperText>사용할 수 있는 이메일 입니다.</S.HelperText>
          )}
          {emailValid === false && (
            <S.HelperText style={{ color: "red" }}>
              이미 사용중인 이메일입니다.
            </S.HelperText>
          )}

          <S.InputContainer>
            <InputField
              name="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
          </S.InputContainer>
          <S.InputContainer>
            <InputField
              name="confirmPassword"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              rules={{
                validate: (value) =>
                  value === watch("password") ||
                  "비밀번호가 일치하지 않습니다.",
              }}
              error={errors.confirmPassword?.message}
            />
          </S.InputContainer>

          <S.InputContainer>
            <InputField
              name="name"
              label="이름"
              placeholder="이름을 입력하세요"
            />
          </S.InputContainer>

          <S.InputContainer>
            <InputField
              name="nickname"
              label="닉네임"
              placeholder="닉네임을 입력하세요"
            />
            <S.CheckButton type="button" onClick={checkNickname}>
              중복확인
            </S.CheckButton>
          </S.InputContainer>
          {nicknameValid === true && (
            <S.HelperText>사용할 수 있는 닉네임입니다.</S.HelperText>
          )}
          {nicknameValid === false && (
            <S.HelperText style={{ color: "red" }}>
              이미 사용중인 닉네임입니다.
            </S.HelperText>
          )}

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

          <S.SubmitButton type="submit">회원가입</S.SubmitButton>
        </FormContainer>
      </S.Container>
    </>
  );
}
