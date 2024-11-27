import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.color.deepGrey};
  font-size: ${({ theme }) => theme.font.small};
`;
