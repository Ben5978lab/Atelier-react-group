import React, { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searched: string;
  setSearched: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searched, setSearched }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search your champion"
      name="search"
      onChange={handleChange}
      value={searched}
    />
  );
};

export default SearchBar;
