import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 50%;
  color: ${(props) => props.theme.color.white};
  margin-right: 8px;

  svg {
    font-size: 20px;
  }
`;

export const ShopName = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;
