import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

interface CheckBoxProps {
  checked: boolean;
}

export const Checkbox = styled.div<CheckBoxProps>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.deepGrey};
  border-radius: 4px;
  color: ${(props) => props.theme.color.white};
  transition: all 0.2s;
  cursor: pointer;

  ${({ checked, theme }) =>
    checked
      ? css`
          background-color: ${theme.color.orange};
          border-color: ${theme.color.orange};
        `
      : css`
          background-color: transparent;
          border-color: ${theme.color.deepGrey};
        `}

  svg {
    font-size: 12px;
  }
`;
