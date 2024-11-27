import styled from "styled-components";

interface LocationProps {
  location: string;
}

const getUserIconUrl = (location: string) =>
  location === "/users/my" ? "/icons/orangeUser.svg" : "/icons/user.svg";

const getCartIconUrl = (location: string) =>
  location === "/cart" ? "/icons/orangeCart.svg" : "/icons/cart.svg";

export const S = {
  Nav: styled.div`
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 16px;

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};

    width: 1260px;
    height: 60px;
    background-color: ${(props) => props.theme.color.white};
  `,
  Logo: styled.div`
    display: flex;
    align-items: center;

    gap: 4px;

    font-family: ${(props) => props.theme.font.LogoFont};
    color: ${(props) => props.theme.color.orange};
    font-size: ${(props) => props.theme.font.title};
  `,
  LogoIcon: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("/logo.png");
    background-size: contain;
    background-repeat: no-repeat;

    width: 28px;
    height: 27px;
  `,
  NavBtn: styled.button`
    padding: 0px;

    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.grey};

    border: none;
    cursor: pointer;

    outline: none;
    &:focus {
      outline: none;
    }
    &:hover {
      outline: none;
    }
  `,
  UserBox: styled.div`
    display: flex;
    gap: 16px;
  `,
  UserIcon: styled.div<LocationProps>`
    background-image: url(${(props) => getUserIconUrl(props.location)});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  `,
  CartIcon: styled.div<LocationProps>`
    background-image: url(${(props) => getCartIconUrl(props.location)});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  `,
  ActiveCartIcon: styled.div``,
};
