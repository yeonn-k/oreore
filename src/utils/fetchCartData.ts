import { getAxios } from "../utils/axios";

interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  shop: {
    nickname: string;
    _id: string;
  };
  checked: boolean;
}

export const fetchCartData = async (): Promise<
  { shopName: string; items: CartItem[] }[]
> => {
  const localCart = JSON.parse(localStorage.getItem("products") || "[]");

  const requests = localCart.map(
    async (cartItem: {
      id: string;
      shop: { nickname: string; _id: string };
    }) => {
      const response = await getAxios(`/products/${cartItem.id}`);
      const product = response.data;

      return {
        ...product,
        shop: cartItem.shop,
        checked: false,
      };
    },
  );

  const items = await Promise.all(requests);

  const groupedByShop = items.reduce(
    (acc: Record<string, { shopId: string; items: CartItem[] }>, item) => {
      const shopKey = item.shop.nickname;

      if (!acc[shopKey]) {
        acc[shopKey] = {
          shopId: item.shop._id,
          items: [],
        };
      }
      acc[shopKey].items.push(item);
      return acc;
    },
    {},
  );

  return Object.entries(groupedByShop).map(([shopName, { shopId, items }]) => ({
    shopName,
    shopId,
    items,
  }));
};
