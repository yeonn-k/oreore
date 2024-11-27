import React from "react";
import useDropdown from "../../hooks/useDropdown.tsx";

import { S } from "./Dropdown.style.ts";

interface DropdownProps {
  options: string[];
  width?: string;
  height?: string;
  selectedItem: string;
  onClick: (value: string) => void;
}

const Dropdown = ({ options, selectedItem, onClick }: DropdownProps) => {
  const { isOpen, handleToggle } = useDropdown(options);

  const handleClickItem = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    onClick(option);
    handleToggle();
  };

  return (
    <S.DropdownContainer onClick={handleToggle}>
      {selectedItem} <S.DropdownIcon />
      {isOpen && (
        <S.DropdownList>
          {options.map((option, idx) => {
            return (
              <S.DropdownItem
                key={idx}
                onClick={(e) => handleClickItem(e, option)}
              >
                {option}
              </S.DropdownItem>
            );
          })}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
