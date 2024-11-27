import { useState } from "react";

type InputProps = {
  [key: string]: string;
};

const useInputValue = (initial: InputProps = {}) => {
  const [inputValue, setInputValue] = useState<InputProps>(initial);

  const handleInputChange = (name: string, value: string) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return [inputValue, handleInputChange] as const;
};

export default useInputValue;
