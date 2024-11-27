import styled from "styled-components";

interface FocusProps {
  isFocused: boolean;
}

interface SelectedProps {
  isSelected: boolean;
  selectedCategory: string;
}

interface HasFileProps {
  hasFile: boolean;
}

export const S = {
  AddOrEditProduct: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 1260px;

    margin: 0 auto;

    padding-bottom: 60px;
  `,
  TitleBox: styled.div`
    width: 910px;
    height: 60px;
    margin-top: 100px;

    font-size: ${(props) => props.theme.font.title};

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  ImgUpload: styled.input`
    display: none;
  `,
  UploadedImg: styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;

    border-radius: 5px;
  `,
  EditImgBtn: styled.div`
    padding-top: 18px;
    font-size: ${(props) => props.theme.font.small};

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
  UploadImgBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 270px;
    height: 270px;

    margin-top: 40px;

    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  UploadIcon: styled.div`
    background-image: url("/icons/imageUpload.svg");
    width: 20px;
    height: 16px;
  `,
  UploadText: styled.span`
    margin-top: 4px;
    color: ${(props) => props.theme.color.deepGrey};
  `,

  InfoTable: styled.div<HasFileProps>`
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-top: ${(props) => (props.hasFile ? "20px" : "56px")};
    margin-bottom: 40px;

    border-top: 1px solid ${(props) => props.theme.color.lightGrey};

    width: 910px;
  `,
  GridTitle: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  GridContent: styled.div`
    padding: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  `,
  Essential: styled.div`
    color: ${(props) => props.theme.color.orange};
    font-size: ${(props) => props.theme.font.small};
    width: 100%;

    text-align: center;
  `,
  CategoryWrap: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
  `,
  CategoryBox: styled.div<SelectedProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 40px;

    border-radius: 5px;
    border: 1px solid
      ${(props) => {
        if (props.isSelected) {
          return props.theme.color.orange;
        }
        return props.theme.color.lightGrey;
      }};
    color: ${(props) => {
      if (props.isSelected) {
        return props.theme.color.orange;
      }
      return props.theme.color.deepGrey;
    }};
    font-size: ${(props) => props.theme.font.small};
  `,
  Radio: styled.input`
    display: none;
  `,
  ProductDescription: styled.textarea<FocusProps>`
    outline: none;

    width: 678px;
    height: 370px;
    padding: 10px;

    resize: none;

    border-radius: 5px;
    border: 1px solid
      ${(props) => {
        if (props.isFocused) {
          return props.theme.color.orange;
        }
        return props.theme.color.lightGrey;
      }};
  `,
};
