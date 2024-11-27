import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { Nav, ItemCard, Dropdown, Sidebar } from "components";
import Carousel from "./Carousel/Carousel.tsx";

import { getAxios } from "../../utils/axios.ts";

import { ItemProps } from "components/ItemCard/ItemCard.tsx";
import { CarouselItem } from "../../types/types.ts";

import { S } from "./List.style";
import useDropdown from "../../hooks/useDropdown";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import scrollToTop from "../../utils/scrollToTop";

const options = ["최신순", "오래된순"];

const List = () => {
  const [items, setItems] = useState<ItemProps[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const limit = 12;

  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { selectedItem, handleSelect } = useDropdown(options);
  const [, setSearchParams] = useSearchParams();

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const categoryName = params.get("categoryName");

  const getProducts = async () => {
    const sort = selectedItem === "오래된순" ? "oldest" : "latest";
    let url = `/products?currentPage=${currentPage}&limit=${limit}&sort=${sort}`;
    if (categoryName) {
      url += `&categoryName=${categoryName}`;
    }

    await getAxios(url).then((res) => {
      setItems((prevItems) =>
        currentPage === 1
          ? res.data.products
          : [...prevItems, ...res.data.products],
      );
      setTotalPage(res.data.totalPages);
    });
  };

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
    setCurrentPage(1);
    setSearchParams({ categoryName: id, currentPage: "1" });
  };

  const handleClickMoreBtn = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getCarousel = async () => {
    try {
      const response = await axios.get("/data/carousel.json");
      setCarouselData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [currentPage, categoryName, selectedItem]);
  useEffect(() => {
    getCarousel();
  }, []);

  return (
    <S.ListWrap>
      <Nav />
      <S.List>
        <Sidebar
          selectedCategory={selectedCategory}
          onClick={handleCategoryClick}
        />
        <S.ListContent>
          <Carousel carouselData={carouselData} />
          <S.DropdownWrap>
            <Dropdown
              options={options}
              selectedItem={selectedItem}
              onClick={handleSelect}
            />
          </S.DropdownWrap>

          <S.ItemGrid>
            {items.length > 0 ? (
              items.map((item, idx) => {
                const column = 4;
                const row = Math.floor(idx / column) + 1;

                return (
                  <Link to={`/products/${item._id}`} key={item._id}>
                    <ItemCard {...item} key={item._id} idx={idx} row={row} />
                  </Link>
                );
              })
            ) : (
              <S.NoItem>등록된 상품이 없습니다.</S.NoItem>
            )}
            {currentPage < totalPage && (
              <S.MoreBtnWrap>
                <S.MoreBtn onClick={handleClickMoreBtn}>더보기</S.MoreBtn>
              </S.MoreBtnWrap>
            )}
            <ScrollUp onClick={scrollToTop} />
          </S.ItemGrid>
        </S.ListContent>
      </S.List>
    </S.ListWrap>
  );
};

export default List;
