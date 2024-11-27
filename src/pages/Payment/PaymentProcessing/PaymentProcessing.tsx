import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTE_LINK from "../../../routes/RouterLink";
import { postAxios } from "../../../utils/axios";
import { toast } from "react-toastify";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  margin: 50px auto;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #ff7105;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Message = styled.div`
  text-align: center;
  font-size: 1.2em;
  color: #333;
  margin-top: 20px;
`;

const PaymentProcessing: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmPayment = async () => {
      const orderId = searchParams.get("orderId");
      const paymentKey = searchParams.get("paymentKey");
      const amount = searchParams.get("amount");

      if (!orderId || !paymentKey || !amount) {
        toast.error("결제 정보가 올바르지 않습니다.");
        navigate(ROUTE_LINK.PAYMENT_FAIL.path);
        return;
      }

      try {
        const response = await postAxios("/payments/approval", {
          orderId,
          paymentKey,
          amount,
        });

        if (response.data?.success) {
          toast.success("결제가 완료되었습니다.");
          navigate(ROUTE_LINK.PAYMENT_COMPLETE.path);
        } else {
          throw new Error("결제 승인에 실패했습니다.");
        }
      } catch (error) {
        console.error("결제 승인 오류:", error);
        toast.error(
          error instanceof Error ? error.message : "결제 승인에 실패했습니다.",
        );
        navigate(ROUTE_LINK.PAYMENT_FAIL.path);
      }
    };

    confirmPayment();
  }, [navigate, searchParams]);

  return (
    <div>
      <Loader />
      <Message>결제 중입니다. 잠시만 기다려주세요...</Message>
    </div>
  );
};

export default PaymentProcessing;
