import styled from "styled-components";

interface ProductImgProps {
  imgUrl: string;
}

export const S = {
  DetailWrap: styled.main`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 1260px;

    margin: 0 auto;

    padding-bottom: 100px;
  `,
  Detail: styled.div`
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  StickyWrap: styled.div`
    width: 982px;
  `,
  UpperWrap: styled.div`
    display: flex;
    gap: 60px;

    margin-top: 40px;

    width: 100%;
    height: 408px;
  `,
  ProductImg: styled.div<ProductImgProps>`
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    width: 456px;
    height: 408px;

    border-radius: 10px;
  `,
  ProductInfo: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 408px;
  `,
  EditBtn: styled.div`
    position: absolute;
    top: 8px;
    right: 0;

    background-image: url("/icons/edit.svg");
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  `,
  ProductName: styled.div`
    font-size: 20px;
    margin-bottom: 20px;
  `,
  ProductPrice: styled.div`
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 10px;
  `,
  Bold: styled.span`
    font-size: ${(props) => props.theme.font.title};
    font-weight: 800;
  `,
  InfoBox: styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr 14fr);
    gap: 10px;
    align-items: center;

    margin-top: 10px;
  `,
  SellerIcon: styled.div`
    background-image: url("/icons/person.svg");
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
  `,
  DeliveryIcon: styled.div`
    background-image: url("/icons/delivery.svg");
    background-repeat: no-repeat;
    width: 22px;
    height: 16px;
  `,
  greyText: styled.span`
    font-size: ${(props) => props.theme.font.small};
    color: ${(props) => props.theme.color.deepGrey};
  `,

  BtnWrap: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
  `,
  NavBar: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 46px;
    width: 100%;

    height: 48px;
    border-top: 1px solid ${(props) => props.theme.color.lightGrey};
    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  NavCell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  NavText: styled.span`
    color: ${(props) => props.theme.color.deepGrey};

    &:hover {
      cursor: pointer;
    }
  `,

  LowerWrap: styled.div`
    width: 100%;
  `,
  Description: styled.div`
    padding: 20px;
  `,
  Pre: styled.pre`
    width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
  `,
  SellerBox: styled.div`
    position: relative;

    display: flex;
    align-items: center;
    gap: 20px;

    width: 100%;
    padding: 20px;
    margin-top: 20px;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
};
