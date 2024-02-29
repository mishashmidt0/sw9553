import { ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>, option: string) => {
    e.stopPropagation();
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[240px] text-[14px]" ref={selectRef}>
      <button
        className="flex h-[34px] w-full items-center justify-center rounded border border-[#54F4DF] bg-[#34C4F6]/10 uppercase transition-all active:scale-[99%]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
      </button>
      {isOpen && (
        <ul
          className={
            'absolute top-[37px] w-full rounded border border-[#47C2E9]/20 transition-colors hover:border-[#47C2E9]/30'
          }
        >
          {options.map((option, index) => (
            <li
              className={
                'flex h-[44px] cursor-pointer items-center justify-between border-b border-[#BAC1CC]/10 bg-[#BAC1CC]/10 px-6 uppercase transition-colors last:border-none hover:border-[#D35DEB]/10'
              }
              key={index}
              onClick={(e) => handleOptionClick(e, option)}
            >
              <p>{option}</p>
              <ArrowRight className={'size-4'} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
