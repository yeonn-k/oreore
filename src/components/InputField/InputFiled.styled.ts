import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: 4px;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.orange};
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;
