import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  position: sticky;
  top: 14px;

  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 14px;
`;

interface CategoryButtonProps {
  isSelected: boolean;
}

export const CategoryButton = styled.button<CategoryButtonProps>`
  display: flex;
  align-items: center;
  padding: 11px;
  color: ${({ theme }) => theme.color.black};
  background: none;
  border: hidden;
  border-radius: 5px;
  cursor: pointer;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      padding: 10px;
      border: 1px solid ${theme.color.orange};
    `}

  &:hover {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.orange30};
  }

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;

export const CategoryName = styled.span`
  color: ${({ theme }) => theme.color.black};
`;
