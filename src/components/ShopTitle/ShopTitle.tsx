import React from "react";
import * as S from "./ShopTitle.styled";
import { BsShop } from "react-icons/bs";

interface ShopTitleProps {
  shopName: string;
}

const ShopTitle: React.FC<ShopTitleProps> = ({ shopName }) => (
  <S.Container>
    <S.Logo>
      <BsShop />
    </S.Logo>
    <S.ShopName>{shopName}</S.ShopName>
  </S.Container>
);

export default ShopTitle;
