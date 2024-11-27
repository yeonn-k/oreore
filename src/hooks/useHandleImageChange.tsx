import { useState, useRef } from "react";
import { toast } from "react-toastify";

import uploadImageToS3 from "./uploadImageToS3";

const useHandleImageChange = (type: string) => {
  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [hasFile, setHasFile] = useState<boolean>(false);

  const handleImageChange = async () => {
    const files = imgInputRef.current?.files;

    if (!files || files.length === 0) {
      toast.error("이미지가 선택되지 않았습니다.");
      return;
    }

    const file = files[0];

    try {
      const uploadedImageUrl = await uploadImageToS3(file, type);
      setPreview(uploadedImageUrl);
      setHasFile(true);
    } catch (error) {
      toast.error("이미지 업로드 중 오류가 발생했습니다.");
    }
  };

  return {
    imgInputRef,
    preview,
    hasFile,
    handleImageChange,
  };
};

export default useHandleImageChange;
