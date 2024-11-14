import axios from "axios";
import { useEffect, useState } from "react";

import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";

import useFormatPrice from "../../hooks/useFormatPrice";

import { ItemProps } from "../../types/types";

import { S } from "./Detail.style";
import Sidebar from "../../components/Sidebar/Sidebar";

const Detail = () => {
  const [item, setItem] = useState<ItemProps | null>(null);

  const getItem = async () => {
    try {
      const res = await axios.get("/data/items.json");
      setItem(res.data[0]);
    } catch (err) {
      console.error("Error fetching item: ", err);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const addToCart = () => {};

  const purchase = () => {};

  if (!item) return null;
  return (
    <S.DetailWrap>
      <Nav />
      <S.Detail>
        <Sidebar />

        <div>
          <S.UpperWrap>
            <S.ProductImg imgUrl={item.imgUrl} />
            <S.ProductInfo>
              <div>
                <S.EditBtn />
                <S.ProductName>{item.name}</S.ProductName>
                <S.ProductPrice>
                  <S.Bold>{useFormatPrice(item.price)}</S.Bold> 원
                </S.ProductPrice>
                <S.InfoBox>
                  <S.SellerIcon />
                  <S.greyText>랄랄라</S.greyText>
                </S.InfoBox>
                <S.InfoBox>
                  <S.DeliveryIcon />
                  <S.greyText>배송비 무료</S.greyText>
                </S.InfoBox>
              </div>

              <S.BtnWrap>
                <Button
                  btnText="장바구니 담기"
                  bgcolor="blue70"
                  handleClick={addToCart}
                />
                <Button
                  btnText="바로구매 하기"
                  bgcolor="orange70"
                  handleClick={purchase}
                />
              </S.BtnWrap>
            </S.ProductInfo>
          </S.UpperWrap>

          <S.NavBar>
            <S.NavCell>
              <S.NavText>상품 정보</S.NavText>
            </S.NavCell>
            <S.NavCell>
              <S.NavText>판매자 정보</S.NavText>
            </S.NavCell>
          </S.NavBar>

          <S.LowerWrap>
            <S.Description>{item.description}</S.Description>
            <S.SellerBox>
              <S.SellerIcon />
              <S.greyText>랄랄라</S.greyText>
            </S.SellerBox>
          </S.LowerWrap>
        </div>
      </S.Detail>
    </S.DetailWrap>
  );
};

export default Detail;