import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import * as S from "./InputFiled.styled";

interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "password" | "email";
  rules?: RegisterOptions;
  error?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  rules,
  error,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <S.InputContainer>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        {...register(name, rules)}
        type={type}
        placeholder={placeholder}
      />
      {error && <S.ErrorText>{errors[name]?.message as string}</S.ErrorText>}
    </S.InputContainer>
  );
};

export default InputField;
