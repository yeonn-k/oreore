import styled from "styled-components";

interface ModalTypeProps {
  modalType: string | null;
}

export const S = {
  ModalWrap: styled.div`
    z-index: 15;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.6);
  `,
  ModalBox: styled.div`
    z-index: 20;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 214px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 10px;
    padding: 15px 15px;
    padding-bottom: 42px;
  `,
  ModalCloseButton: styled.button<ModalTypeProps>`
    visibility: ${(props) => (props.modalType === "login" ? "hidden" : "")};

    align-self: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 26px;
  `,
  ModalText: styled.span``,
  BtnBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    width: 80%;
  `,
};
