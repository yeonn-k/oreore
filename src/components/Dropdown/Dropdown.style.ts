import styled from "styled-components";

export const S = {
  DropdownContainer: styled.div`
    z-index: 1;

    position: relative;

    display: flex;
    align-items: center;

    padding: 10px;

    width: 110px;
    height: 40px;
    font-size: 14px;

    border: 2px solid ${(props) => props.theme.color.orange};
    background-color: ${(props) => props.theme.color.white};
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
  `,
  DropdownList: styled.div`
    position: absolute;
    left: -1px;
    top: 40px;
    font-size: 14px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    border: 1px solid ${(props) => props.theme.color.orange};
    border-radius: 5px;

    background-color: ${(props) => props.theme.color.white};

    width: inherit;
    padding: 6px;

    &:hover {
      cursor: pointer;
    }
  `,
  DropdownItem: styled.div`
    width: 100px;
    padding: 4px;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.color.blue30};
      border-radius: 5px;
    }
  `,
  DropdownIcon: styled.div`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);

    background-image: url("/icons/chevron_dropdown.svg");
    background-repeat: no-repeat;
    width: 13px;
    height: 8px;
  `,
};
