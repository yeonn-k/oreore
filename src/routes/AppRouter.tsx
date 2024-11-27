import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTE_LINK from "./RouterLink.ts";
import List from "../pages/List/List.tsx";
import LoginPage from "../pages/Login/Login.tsx";
import SignupPage from "../pages/Signup/Signup.tsx";
import Detail from "../pages/Detail/Detail.tsx";
import AddOrEditProduct from "../pages/AddOrEditProduct/AddOrEditProduct.tsx";
import MyPage from "../pages/MyPage/MyPage.tsx";
import CartPage from "../pages/Cart/Cart.tsx";
import PaymentPage from "../pages/Payment/Payment.tsx";
import PasswordCheckPage from "../pages/PasswordCheck/PasswordCheck.tsx";
import UserDataEditPage from "../pages/UserDataEdit/UserDataEdit.tsx";
import PaymentComplete from "../pages/Payment/PaymentComplete/PaymentComplete.tsx";
import PaymentFail from "../pages/Payment/PaymentFail/PaymentFail.tsx";
import BankPaymentComplete from "../pages/Payment/BankPaymentComplete/BankPaymentComplete.tsx";
import PaymentProcessing from "../pages/Payment/PaymentProcessing/PaymentProcessing.tsx";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: ROUTE_LINK.LIST.path,
      element: <List />,
    },
    {
      path: ROUTE_LINK.LOGIN.path,
      element: <LoginPage />,
    },
    {
      path: ROUTE_LINK.SIGNUP.path,
      element: <SignupPage />,
    },
    {
      path: ROUTE_LINK.DETAIL.path,
      element: <Detail />,
    },
    {
      path: ROUTE_LINK.ADD_PRODUCT.path,
      element: <AddOrEditProduct />,
    },
    {
      path: ROUTE_LINK.EDIT_PRODUCT.path,
      element: <AddOrEditProduct />,
    },
    {
      path: ROUTE_LINK.MYPAGE.path,
      element: <MyPage />,
    },
    {
      path: ROUTE_LINK.PASSWORD_CHECK.path,
      element: <PasswordCheckPage />,
    },
    {
      path: ROUTE_LINK.INFO_EDIT.path,
      element: <UserDataEditPage />,
    },
    {
      path: ROUTE_LINK.CART.path,
      element: <CartPage />,
    },
    {
      path: ROUTE_LINK.PAYMENT.path,
      element: <PaymentPage />,
    },
    {
      path: ROUTE_LINK.PAYMENT_COMPLETE.path,
      element: <PaymentComplete />,
    },
    {
      path: ROUTE_LINK.BANK_PAYMENT_COMPLETE.path,
      element: <BankPaymentComplete />,
    },
    {
      path: ROUTE_LINK.PAYMENT_FAIL.path,
      element: <PaymentFail />,
    },
    {
      path: ROUTE_LINK.PAYMENT_PROCESSING.path,
      element: <PaymentProcessing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
