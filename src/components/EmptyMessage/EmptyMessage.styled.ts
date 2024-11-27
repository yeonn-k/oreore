import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  color: ${({ theme }) => theme.color.black};
`;

export const Icon = styled.div`
  margin-bottom: 16px;
`;

export const Message = styled.div`
  font-size: ${({ theme }) => theme.font.title};
  margin-bottom: 24px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    transition: all 0.2s;
    font-size: 18px;
    font-weight: bold;
  }
`;
