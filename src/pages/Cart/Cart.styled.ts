import styled from "styled-components";

export const CartWrap = styled.main`
  display: flex;
  flex-direction: column;
`;

export const WrapBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  min-width: 1260px;
  margin-top: 60px;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ShopContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
`;

export const ShopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const SelectAllText = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.color.black};
`;

export const DeleteSelectedText = styled.span`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  text-decoration: underline;
`;

export const ItemsContainer = styled.div`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 20px;
`;

export const ItemRow = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 8px 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
  &:last-child {
    border-bottom: none;
    padding: 8px 0;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: none;
  border: none;
  font-size: 28px;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const PurchaseContainer = styled.div`
  width: 33%;
  flex: 1;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;
  padding-left: 20px;
  border-left: 1px solid ${({ theme }) => theme.color.lightGrey};

  button {
    transition: all 0.2s;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const TotalAmount = styled.div`
  font-size: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  text-align: right;
  margin-bottom: 10px;
`;

export const DeleteShopText = styled.span`
  font-size: ${({ theme }) => theme.font.small};
  text-decoration: underline;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
`;
