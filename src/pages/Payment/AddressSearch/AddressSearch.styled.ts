import styled from "styled-components";

export const CheckButton = styled.button`
  margin-left: 8px;
  padding: 11px 12px;
  font-size: ${({ theme }) => theme.font.small};
  color: ${(props) => props.theme.color.white};
  background-color: ${({ theme }) => theme.color.grey};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 80px;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
  }
`;
