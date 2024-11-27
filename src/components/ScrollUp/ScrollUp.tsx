import { S } from "./ScrollUp.style";

interface ScrollUpProps {
  onClick: () => void;
}

const ScrollUp = ({ onClick }: ScrollUpProps) => {
  return (
    <S.ScrollUp onClick={onClick}>
      <S.ScrollUpIcon />
    </S.ScrollUp>
  );
};

export default ScrollUp;
