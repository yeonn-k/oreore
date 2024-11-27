import styled from "styled-components";

interface CarouselBoxProps {
  currentIdx: number;
}

interface CarouselImgProps {
  imgUrl: string;
}

export const S = {
  CarouselWrap: styled.div`
    position: relative;
    width: 982px;
    height: 252px;
    border-radius: 5px;
    overflow: hidden;
  `,

  CarouselBox: styled.div<CarouselBoxProps>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    height: 100%;
    transform: translateX(-${(props) => props.currentIdx * 100}%);
    transition: transform 0.5s ease;
  `,

  CarouselImg: styled.div<CarouselImgProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  `,

  CarouselText: styled.span`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${(props) => props.theme.color.white};
    font-size: 20px;
    font-weight: 700;
  `,

  ChevronLeft: styled.div`
    z-index: 1;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 30px;
    background-image: url("/icons/chevronLeft.svg");
    background-size: contain;
    &:hover {
      cursor: pointer;
    }
  `,

  ChevronRight: styled.div`
    z-index: 1;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 30px;
    background-image: url("/icons/chevronRight.svg");
    background-size: contain;
    &:hover {
      cursor: pointer;
    }
  `,
};
