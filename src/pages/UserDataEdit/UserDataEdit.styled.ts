import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 1320px) {
    margin: 20px 0 50px;
  }
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

export const ProfilePicture = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  object-fit: cover;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  width: 50%;
  padding: 9px 12px 10px;
  background-color: ${({ theme }) => theme.color.orange70};
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.small};
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileButton = styled.button`
  margin-left: 8px;
  padding: 11px 12px;
  font-size: 14px;
  color: ${(props) => props.theme.color.white};
  background-color: ${({ theme }) => theme.color.grey};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 80px;
  width: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
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
