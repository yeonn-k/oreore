import React from "react";
import * as S from "./Checkbox.styled";
import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <S.Label>
      <S.Input type="checkbox" checked={checked} onChange={onChange} />
      <S.Checkbox checked={checked}>{checked && <FaCheck />}</S.Checkbox>
    </S.Label>
  );
};

export default Checkbox;
