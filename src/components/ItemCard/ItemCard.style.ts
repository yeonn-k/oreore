import styled from "styled-components";

interface CellProps {
  idx: number;
  row: number;
}

interface ImgUrlProps {
  imgUrl: string;
}

export const S = {
  ItemCard: styled.div`
    position: relative;
    width: 100%;
    height: 227px;

    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
  `,
  ProductImg: styled.div<ImgUrlProps>`
    position: relative;
    width: 100%;
    height: 100%;

    border-radius: 5px;

    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `,
  ProductInfo: styled.div<CellProps>`
    position: absolute;
    bottom: 0px;
    left: 0px;

    padding: 4px 10px;
    width: 100%;

    background-color: ${(props) => {
      const isOddRow = props.row % 2 !== 0;
      const isOddIdx = (props.idx + 1) % 2 !== 0;

      if (isOddRow && isOddIdx) {
        return props.theme.color.blue30;
      }
      if (isOddRow) {
        return props.theme.color.orange30;
      }
      if (isOddIdx) {
        return props.theme.color.orange30;
      }
      return props.theme.color.blue30;
    }};
    color: #fff;
  `,
  ProductName: styled.div`
    font-weight: 600;
  `,
  ProductPrice: styled.div`
    font-size: ${(props) => props.theme.font.small};
  `,
  DeleteBtn: styled.div`
    position: absolute;
    top: 6px;
    right: 6px;

    width: 20px;
    height: 20px;

    font-size: 20px;
  `,
};
