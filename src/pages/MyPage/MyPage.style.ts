import styled from "styled-components";

interface PageNumProps {
  num: number;
  currentPage: number;
}

export const S = {
  MyPageWrap: styled.div`
    width: 1260px;

    margin: 0 auto;
    margin-top: 100px;
  `,
  MyPage: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    width: 90%;

    margin: 0 auto;
  `,

  SideProfile: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 350px;
    height: 440px;
    padding: 32px 6px;

    border-radius: 5px;

    border: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  ProfileImg: styled.img`
    width: 170px;
    height: 170px;

    border-radius: 50%;
    object-fit: cover;
  `,
  UserName: styled.div`
    font-size: ${(props) => props.theme.font.title};
    font-weight: 600;
  `,
  MyPageContent: styled.div`
    width: 100%;
  `,
  SellingBox: styled.div`
    width: 100%;
    height: 670px;
    margin-bottom: 36px;

    overflow: hidden;
  `,
  TitleBox: styled.div`
    width: 100%;
    height: 60px;

    font-size: ${(props) => props.theme.font.title};

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  ItemGrid: styled.div`
    display: grid;

    width: 100%;
    height: auto;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 24px;

    margin-top: 24px;
  `,
  PaginationBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin-top: 40px;

    width: 100%;
    height: auto;
  `,
  ArrowIconBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;

    border-radius: 10px;

    box-shadow: 0px 0px 14px 0px ${(props) => props.theme.color.lightGrey};

    &:hover {
      cursor: pointer;
    }
  `,
  LeftArrowIcon: styled.div`
    width: 13px;
    height: 11px;
    background-image: url("/icons/arrowLeft.svg");
    background-size: contain;
    background-repeat: no-repeat;

    margin-left: 3px;
  `,
  RightArrowIcon: styled.div`
    width: 13px;
    height: 11px;
    background-image: url("/icons/arrowRight.svg");
    background-size: contain;
    background-repeat: no-repeat;

    margin-left: 3px;
  `,
  PaginationNum: styled.div<PageNumProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;

    color: ${(props) => {
      if (props.currentPage === props.num) {
        return props.theme.color.orange;
      } else {
        return props.theme.color.grey;
      }
    }};

    &:hover {
      cursor: pointer;
    }
  `,
  PurchaseList: styled.div`
    height: 447px;
    overflow: hidden;
  `,
  CartGrid: styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;

    grid-row-gap: 16px;

    width: 100%;

    overflow: hidden;

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};

    padding-left: 20px;
    margin-top: 20px;
    padding-bottom: 20px;
  `,
  DateTitle: styled.div`
    font-weight: 600;
    padding: 10px 22px 0px;
  `,
  Shop: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    text-align: 16px;
    text-decoration: none;
  `,
  ShopIconCircle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45px;
    height: 45px;

    border-radius: 50%;

    background-color: ${(props) => props.theme.color.lightGrey};
  `,
  ShopIcon: styled.div`
    width: 26px;
    height: 23px;

    background-image: url("/icons/shop.svg");
    background-size: cover;
    background-repeat: no-repeat;
  `,
  MoreBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.color.deepGrey};

    width: 100%;
    height: 20px;

    margin-top: 20px;
    margin-bottom: 100px;
  `,
  EmptyCart: styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 300px;

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
};
