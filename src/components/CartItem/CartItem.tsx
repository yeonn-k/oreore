import React from "react";
import * as S from "./CartItem.styled";

interface CartItemProps {
  imageSrc: string;
  title: string | number;
  description: string;
  page: string;
}

const CartItem: React.FC<CartItemProps> = ({
  imageSrc,
  title,
  description,
  page: _,
}) => {
  void _;
  return (
    <S.Container>
      <S.Image src={imageSrc} alt="상품이미지" />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Container>
  );
};

export default CartItem;
