import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTE_LINK from "../../routes/RouterLink";

import { Nav, Button, ItemCard, CartItem, ConfirmModal } from "components";

import { deleteAxios, getAxios } from "../../utils/axios";

import { CartItems } from "../../types/types";
import { ItemProps } from "../../components/ItemCard/ItemCard";

import { S } from "./MyPage.style";
import useModalStore from "../../stores/modal";
import { toast } from "react-toastify";
import useAuthStore from "../../stores/useAuthStore";

const MyPage = () => {
  const navigate = useNavigate();
  const [sellingItems, setSellingItems] = useState<ItemProps[]>([]);

  const [pageNum, setPageNum] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const limit = 6;

  const [purchasedItems, setPurchasedItems] = useState<CartItems[]>([]);
  const [filteredCartItems, setFilteredCartItems] = useState<
    {
      date: string;
      items: CartItems[];
    }[]
  >([]);
  const { modalType, closeModal } = useModalStore();
  const user = useAuthStore();

  let sellingurl = `products/my?currentPage=${currentPage}&limit=${limit}`;
  let purchasedurl = `orders?currentPage=${currentPage}&limit=${limit}`;

  const getSellingItems = () => {
    getAxios(sellingurl).then((res) => {
      setSellingItems(res.data.myProducts);
      setTotalPage(res.data.totalPages);
    });
  };

  const getPurchased = () => {
    getAxios(purchasedurl).then((res) => {
      setPurchasedItems(res.data.orders);
      setTotalPage(res.data.totalPages);
    });
  };
  useEffect(() => {
    getSellingItems();
    getPurchased();
  }, []);

  const editProfile = () => {
    navigate(ROUTE_LINK.PASSWORD_CHECK.path);
  };

  const addproduct = () => {
    navigate(ROUTE_LINK.ADD_PRODUCT.path);
  };

  const paginationNum = () => {
    let nums: number[] = [];
    for (let i = 1; i <= totalPage; i++) {
      nums.push(i);
    }

    setPageNum(nums);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    } else return;
  };
  const goToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    } else return;
  };

  useEffect(() => {
    getSellingItems();
  }, [currentPage]);

  useEffect(() => {
    paginationNum();
  }, [sellingItems]);

  const deleteProduct = async (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const res = await deleteAxios(`/products/${id}`);

      if (res.status === 200) {
        toast.success("✨상품이 삭제되었습니다.");
        getSellingItems();
      } else toast.warn("상품 삭제를 실패했습니다. 다시 시도해주세요.");
    } catch (error) {
      toast.error("상품 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleDeleteModalClick = () => {
    getSellingItems();
    closeModal();
  };

  useEffect(() => {
    let dates: string[] = [];

    const uniqueDates = [
      ...new Set(purchasedItems.map((item) => item.purchaseDate)),
    ];
    dates = uniqueDates;

    const groupedCartItems = dates.map((date) => ({
      date,
      items: purchasedItems.filter(
        (cartItem) => cartItem.purchaseDate === date,
      ),
    }));

    setFilteredCartItems(groupedCartItems);
  }, [purchasedItems]);

  console.log(user.user);

  return (
    <S.MyPageWrap>
      {modalType === "deleteProduct" && (
        <ConfirmModal
          modalText="상품이 삭제되었습니다"
          onClick={handleDeleteModalClick}
        />
      )}
      <Nav />
      <S.MyPage>
        <S.SideProfile>
          <S.ProfileImg
            src={user.user?.image ? user.user.image : "/icons/profile.svg"}
          />
          <S.UserName>{user.user?.nickname}</S.UserName>
          <Button
            btnText="정보 수정하기"
            bgcolor="orange70"
            onClick={editProfile}
          />
          <Button
            btnText="상품 등록하기"
            bgcolor="orange70"
            onClick={addproduct}
          />
        </S.SideProfile>
        <S.MyPageContent>
          <S.SellingBox>
            <S.TitleBox>판매중인 상품</S.TitleBox>
            <S.ItemGrid>
              {sellingItems.length > 0 ? (
                sellingItems.map((sellingItem, idx) => {
                  const column = 3;
                  const row = Math.floor(idx / column) + 1;

                  return (
                    <Link
                      to={`/products/${sellingItem._id}`}
                      key={sellingItem._id}
                    >
                      <ItemCard
                        {...sellingItem}
                        idx={idx}
                        row={row}
                        deleteProduct={deleteProduct}
                      />
                    </Link>
                  );
                })
              ) : (
                <S.EmptyCart>판매 중인 상품이 없습니다.</S.EmptyCart>
              )}
            </S.ItemGrid>
            <S.PaginationBox>
              <S.ArrowIconBox>
                <S.LeftArrowIcon onClick={goToPrevPage} />
              </S.ArrowIconBox>
              {pageNum.map((num) => {
                return (
                  <S.PaginationNum
                    key={num}
                    num={num}
                    currentPage={currentPage}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </S.PaginationNum>
                );
              })}
              <S.ArrowIconBox>
                <S.RightArrowIcon onClick={goToNextPage} />
              </S.ArrowIconBox>
            </S.PaginationBox>
          </S.SellingBox>
          <S.PurchaseList>
            <S.TitleBox>구매 내역</S.TitleBox>
            {purchasedItems.length > 0 ? (
              filteredCartItems.map(({ date, items }) => (
                <div key={date}>
                  <S.DateTitle>{date}</S.DateTitle> {/* 날짜 제목 표시 */}
                  {items.map((cartItem) => (
                    <S.CartGrid>
                      <Link to="/detail">
                        <CartItem
                          page="mypage"
                          imageSrc={cartItem.imageSrc}
                          title={cartItem.itemName}
                          description={`${cartItem.price.toLocaleString()} 원`}
                        />
                      </Link>

                      <S.Shop>
                        <S.ShopIconCircle>
                          <S.ShopIcon />
                        </S.ShopIconCircle>
                        {cartItem.shopName}
                      </S.Shop>
                    </S.CartGrid>
                  ))}
                </div>
              ))
            ) : (
              <S.EmptyCart>구매 내역이 없습니다.</S.EmptyCart>
            )}
          </S.PurchaseList>
        </S.MyPageContent>
      </S.MyPage>
    </S.MyPageWrap>
  );
};

export default MyPage;
