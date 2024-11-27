import formatPrice from "../../utils/formatPrice";
import { S } from "./ItemCard.style";

export interface ItemProps {
  idx: number;
  row: number;

  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  categoryName: string;
  soldOut: boolean;
  sellerId: {
    _id: string;
    nickname: string;
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  __v: 0;
  deleteProduct: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
}

const ItemCard = ({
  _id,
  idx,
  row,
  name,
  image,
  price,
  deleteProduct,
}: ItemProps) => {
  return (
    <S.ItemCard>
      <S.ProductImg imgUrl={image}>
        {location.pathname === "/users/my" && (
          <S.DeleteBtn
            onClick={(e) => {
              deleteProduct(_id, e);
            }}
          >
            &times;
          </S.DeleteBtn>
        )}
      </S.ProductImg>
      <S.ProductInfo idx={idx} row={row}>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>{formatPrice(price)} 원</S.ProductPrice>
      </S.ProductInfo>
    </S.ItemCard>
  );
};

export default ItemCard;
