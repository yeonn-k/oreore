import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.font.LogoFont};
  color: ${({ theme }) => theme.color.orange};
  font-size: 38px;
  padding-right: 14px;
`;

export const LogoImage = styled.img`
  height: 40px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  color: ${(props) => props.theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryHover};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const FooterLink = styled.span`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.color.deepGrey};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.black};
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
