import styled from "styled-components";

export const S = {
  ScrollUp: styled.div`
    position: absolute;

    right: -78px;
    bottom: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.color.blue30};

    width: 50px;
    height: 50px;

    border-radius: 50%;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.color.blue};
    }
  `,
  ScrollUpIcon: styled.div`
    background-image: url("/icons/chevron_up.svg");
    background-repeat: no-repeat;
    background-size: contain;

    width: 30px;
    height: 22px;
  `,
};
