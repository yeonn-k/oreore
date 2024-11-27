import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 40px;
  gap: 20px;
  margin-top: 60px;
  max-width: 1260px;
`;

export const InputContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-end;

  div {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Section = styled.div`
  padding: 20px;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  form {
    margin-top: 5px;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
  }
`;

export const AddressInfo = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &.flexWrap {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const EditButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${({ theme }) => theme.color.black};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: none;
`;

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  label {
    font-size: 16px;
    color: ${({ theme }) => theme.color.black};
    font-weight: bold;
  }

  span {
    font-size: ${({ theme }) => theme.font.small};
  }

  input {
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
    border-radius: 4px;
    outline: none;
    background-color: rgba(157, 125, 100, 0.1);
  }
`;

export const ItemContainer = styled.div`
  padding: 0 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};

  > div {
    padding: 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  flex: 1;
`;

export const SummaryBox = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    transition: all 0.3s;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const TotalAmount = styled.div`
  font-weight: bold;

  span {
    float: right;
  }
`;

export const AgreementText = styled.p`
  font-size: 14px;
  color: #666;
  margin-left: 8px;
`;

export const AgreementTextBox = styled.div`
  padding: 12px;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.small};
  background-color: rgba(157, 125, 100, 0.1);
  margin-bottom: 16px;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.deepGrey};
`;

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
