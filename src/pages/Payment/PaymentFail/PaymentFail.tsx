import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EmptyMessage from "../../../components/EmptyMessage/EmptyMessage";
import ROUTE_LINK from "../../../routes/RouterLink";

const PaymentFail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message, code } = location.state || {};
  return (
    <>
      <EmptyMessage
        iconType="card"
        message="결제를 실패했습니다."
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
      {code && <p>{`에러 코드: ${code}`}</p>}
      {message && <p>{`실패 사유: ${message}`}</p>}
    </>
  );
};

export default PaymentFail;
