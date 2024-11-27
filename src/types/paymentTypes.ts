export interface OrderItem {
  _id: string;
  image: string;
  price: number;
  description: string;
  categoryName: string;
  name: string;
  sellerId: {
    _id: string;
  };
}


export interface OrderInfo {
  name: string;
  phone: string;
  postalCode: string;
  address: string;
  detailAddress?: string;
  requestMessage: string;
  items: OrderItem[];
  totalAmount: number;
}

export interface ApprovalInfo {
  orderId: string;
}
