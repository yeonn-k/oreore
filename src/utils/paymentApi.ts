import { ApprovalInfo, OrderInfo } from "types/paymentTypes";
import { postAxios } from "./axios";

export const createOrder = async (orderInfo: OrderInfo) => {
  try {
    const response = await postAxios("/orders", orderInfo);
    return response.data;
  } catch (error) {
    console.log("주문 생성 실패:", error);
    throw error;
  }
};

export const approvePayment = async (approvalInfo: ApprovalInfo) => {
  try {
    const response = await postAxios("/payments/approval", approvalInfo);
    return response.data;
  } catch (error) {
    console.error("결제 승인 실패:", error);
    throw error;
  }
};

