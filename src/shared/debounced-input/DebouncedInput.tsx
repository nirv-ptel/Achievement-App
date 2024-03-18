import React, { ChangeEvent } from "react";

type DebouncedTextBoxProps = {
  value: string;
  onChange: (value: string) => void;
  delay?: number;
};

function DebouncedInput({
  value,
  onChange,
  delay = 1000,
}: DebouncedTextBoxProps) {
  const [inputValue, setInputValue] = React.useState<string>(value);
  const [debounceTimeout, setDebounceTimeout] = React.useState<any | null>(
    null
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimer = setTimeout(() => {
      onChange(newInputValue);
    }, delay);

    setDebounceTimeout(newTimer);
  };

  return (
    <div>
      <input
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        className="w-40 mt-2 py-2 pl-3 pr-10 text-gray-900 bg-white p-1 border border-quillgrey rounded-md outline-none text-xs shadow placeholder-gray-500 "
      />
    </div>
  );
}

export default DebouncedInput;
// above code we are using for search input.
