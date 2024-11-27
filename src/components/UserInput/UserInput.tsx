import { S } from "./UserInput.style";
import useIsFocused from "../../hooks/useIsFocused";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;

  width?: string;
}

const UserInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,

  width,
}: InputProps) => {
  const { isFocused, handleFocus, handleBlur } = useIsFocused();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <S.InputWrap isFocused={isFocused}>
      <S.InputBox
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        width={width}
      />
    </S.InputWrap>
  );
};

export default UserInput;
