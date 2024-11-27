import { useEffect } from "react";
import { UseFormSetValue, UseFormClearErrors } from "react-hook-form";
import { FormValues } from "../UserDataEdit";
import { CheckButton } from "../UserDataEdit.styled";

interface AddressSearchProps {
  setValue: UseFormSetValue<FormValues>;
  clearErrors: UseFormClearErrors<FormValues>;
}

const AddressSearch = ({ setValue, clearErrors }: AddressSearchProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    script.onload = () => console.log("카카오 주소 API 스크립트 로드 완료");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const loadDaumPostcode = () => {
    if (!window.daum || !window.daum.Postcode) {
      console.error("카카오 주소 API가 로드되지 않았습니다.");
      return;
    }

    const postcode = new window.daum.Postcode({
      oncomplete: (data) => {
        const postalCode = data.zonecode;
        const fullAddress = data.address;

        setValue("postalCode", postalCode);
        setValue("address", fullAddress);
        clearErrors(["postalCode", "address"]);
      },
    });

    postcode.open();
  };

  return (
    <CheckButton type="button" onClick={loadDaumPostcode}>
      주소 찾기
    </CheckButton>
  );
};

export default AddressSearch;
