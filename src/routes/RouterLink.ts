const ROUTE_LINK = {
  LIST: { path: "/" },
  LOGIN: { path: "/login" },
  SIGNUP: { path: "/signup" },
  CART: { path: "/cart" },
  DETAIL: { path: "/products/:productId" },
  ADD_PRODUCT: { path: "/addproduct" },
  EDIT_PRODUCT: { path: "/editproduct" },
  MYPAGE: { path: "/users/my" },
  PASSWORD_CHECK: { path: "/users/my/password-check" },
  INFO_EDIT: { path: "/users/my/info-edit" },
  PAYMENT: { path: "/payment" },
  PAYMENT_COMPLETE: { path: "/payment-complete" },
  BANK_PAYMENT_COMPLETE: { path: "/bank/payment-complete" },
  PAYMENT_FAIL: { path: "/payment-fail" },
  PAYMENT_PROCESSING: { path: "/payment-processing" },
};

export default ROUTE_LINK;
