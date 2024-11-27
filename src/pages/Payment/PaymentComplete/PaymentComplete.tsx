import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import EmptyMessage from "../../../components/EmptyMessage/EmptyMessage";
import ROUTE_LINK from "../../../routes/RouterLink";
import { toast } from "react-toastify";
import { postAxios } from "../../../utils/axios";

const PaymentComplete: React.FC = () => {
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

        if (response.data.success === true) {
          toast.success("결제가 완료되었습니다!");
        } else {
          throw new Error(
            response.data?.message || "결제 승인에 실패했습니다.",
          );
        }
      } catch (error) {
        console.error("결제 승인 오류:", error);
        // navigate(ROUTE_LINK.PAYMENT_FAIL.path);
      }
    };

    confirmPayment();
  }, [navigate, searchParams]);

  return (
    <>
      <EmptyMessage
        iconType="card"
        message="결제가 완료되었습니다."
        buttons={[
          {
            btnText: "쇼핑하러 가기",
            onClick: () => navigate(ROUTE_LINK.LIST.path),
            bgcolor: "orange70",
          },
          {
            btnText: "구매내역 보기",
            onClick: () => navigate(ROUTE_LINK.MYPAGE.path),
            bgcolor: "blue70",
          },
        ]}
      />
    </>
  );
};

export default PaymentComplete;
