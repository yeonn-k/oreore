import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  bgcolor?: string;
  fontSize?: string;
}

export const S = {
  Button: styled.button<ButtonProps>`
    width: ${(props) => (props.width ? `${props.width}` : "198px")};
    height: ${(props) => (props.height ? `${props.height}` : "52px")};

    background-color: ${(props) =>
      props.bgcolor
        ? props.theme.color[props.bgcolor]
        : props.theme.color.white};
    color: ${(props) =>
      props.bgcolor ? props.theme.color.white : props.theme.color.orange};

    font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

    border: ${(props) =>
      props.bgcolor ? "none" : `2px solid ${props.theme.color.orange}`};
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => {
        if (props.bgcolor) {
          const baseColor = props.bgcolor.replace(/\d+$/, "");
          return props.theme.color[baseColor];
        }
      }};
    }
  `,
};
