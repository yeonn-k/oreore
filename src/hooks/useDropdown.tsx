import { useState } from "react";

const useDropdown = (options: string[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: string) => {
    setSelectedItem(option);
    setIsOpen((prev) => !prev);
  };

  return { isOpen, selectedItem, handleSelect, handleToggle };
};

export default useDropdown;
