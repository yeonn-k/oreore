import useModalStore from "../../stores/modal/index";
import { S } from "./ConfirmModal.style";
import { Button } from "components";

interface ConfirmModalProps {
  modalText: string;
  onClick: () => void;
  width?: string;
}

const ConfirmModal = ({ modalText, onClick, width }: ConfirmModalProps) => {
  const { modalType, closeModal } = useModalStore();

  return (
    <S.ModalWrap>
      <S.ModalBox>
        <S.ModalCloseButton onClick={closeModal} modalType={modalType}>
          &times;
        </S.ModalCloseButton>
        <S.ModalText>{modalText}</S.ModalText>

        {modalType === "addCartItem" ? (
          <S.BtnBox>
            {" "}
            <Button
              btnText="확인"
              bgcolor="orange70"
              onClick={onClick}
              width={width}
            />
            <Button
              btnText="취소"
              bgcolor="blue70"
              onClick={closeModal}
              width={width}
            />
          </S.BtnBox>
        ) : (
          <Button btnText="확인" bgcolor="orange70" onClick={onClick} />
        )}
      </S.ModalBox>
    </S.ModalWrap>
  );
};

export default ConfirmModal;
