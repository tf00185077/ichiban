import React from 'react';

interface UserInputProps {
  fieldName: string;
  fieldValue: string;
  onChange: (value: string) => void;
  placeholder: string;
  isNessary: boolean;
  type?: string;
}

const UserInput: React.FC<UserInputProps> = ({
  fieldName,
  fieldValue,
  onChange,
  placeholder,
  isNessary,
  type = 'text'
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col font-header mb-[20px]">
      <div className="flex font-bold mb-[5px] text-[14px]">
        <p>
          {isNessary && <span className="text-red-600">*</span>}
          {fieldName}
        </p>
      </div>
      <input
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        value={fieldValue}
        className="border border-gray-400 leading-[32px] py-[5px] px-[15px] rounded-[25px]"
      />
    </div>
  );
};

export default UserInput;