import { create } from "zustand";

interface ModalState {
  modalType: string | null;
  openModal: (type: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  openModal: (type) => set({ modalType: type }),
  closeModal: () => set({ modalType: null }),
}));

export default useModalStore;
