import styled from "styled-components";

interface FocusProps {
  isFocused: boolean;
}

interface InputProps {
  width?: string;
}

export const S = {
  InputWrap: styled.div<FocusProps>`
    display: flex;
    align-items: center;

    padding: 10px;

    width: 260px;
    height: 40px;

    border-radius: 5px;

    border: 1px solid
      ${(props) => {
        if (props.isFocused) {
          return props.theme.color.orange;
        }
        return props.theme.color.lightGrey;
      }};

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox  */
    /* input[type="number"] {
      -moz-appearance: textfield;
    } */
  `,
  InputBox: styled.input<InputProps>`
    outline: none;
    border: none;

    width: ${(props) => (props.width ? props.width : "")};
  `,
};
