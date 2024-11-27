import { OrderInfo } from "types/paymentTypes";
import { create } from "zustand";

interface PaymentState {
  orderInfo: OrderInfo | null;
  setOrderInfo: (info: OrderInfo) => void;
  paymentStatus: "pending" | "success" | "failure";
  setPaymentStatus: (status: "pending" | "success" | "failure") => void;
  orderId: string | null;
  setOrderId: (id: string | null) => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  orderInfo: null,
  setOrderInfo: (info) => set({ orderInfo: info }),
  paymentStatus: "pending",
  setPaymentStatus: (status) => set({ paymentStatus: status }),
  orderId: null,
  setOrderId: (id) => set({ orderId: id }),
}));
