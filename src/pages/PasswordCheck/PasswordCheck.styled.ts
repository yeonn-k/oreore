import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
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

export const HelperText = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.color.blue};
  margin-top: -10px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  color: ${(props) => props.theme.color.white};
  background-color: ${({ theme }) => theme.color.orange70};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
  }
`;
