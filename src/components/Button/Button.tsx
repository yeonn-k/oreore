import { S } from "./Button.style";

export interface ButtonProps {
  btnText: string;
  width?: string;
  height?: string;
  bgcolor?: string;
  fontSize?: string;
  onClick: () => void;
}

const Button = ({
  btnText,
  onClick,
  width,
  height,
  fontSize,
  bgcolor,
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}
      bgcolor={bgcolor}
    >
      {btnText}
    </S.Button>
  );
};

export default Button;
