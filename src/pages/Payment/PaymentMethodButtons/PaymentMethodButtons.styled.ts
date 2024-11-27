import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  padding: 25px 20px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  color: ${({ theme }) => theme.color.deepGrey};
  background-color: ${(props) => props.theme.color.white};
  width: 50%;
  font-weight: bold;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.color.orange};
      border: 1px solid ${theme.color.orange};
    `}

  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.color.orange30};
  }
`;
