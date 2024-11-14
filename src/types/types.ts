export interface ItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export interface CarouselItemProps {
  carouselData: CarouselItem[];
}

export interface CarouselItem {
  id: number;
  imgUrl: string;
  text: string;
}