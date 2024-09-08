"use client";

import SearchIcon from "public/app/search.svg";
import { useState, useEffect } from "react";

type SearchInputProps = {
  placeholder: string;
  onChange: (s: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onChange(search);
  }, [search]);

  return (
    <div className="w-full flex items-center gap-3 group p-4 shadow-md border-[0.25px] border-content-tertiary/40 bg-border-secondary/40 focus-within:border-content-tertiary rounded-xl transition-all focus-within:-translate-y-1 focus-within:shadow-lg">
      <SearchIcon className="w-6 h-6 text-content-tertiary group-focus-within:text-brand-primary-2 transition-all" />
      <input
        placeholder={placeholder}
        className="bg-transparent outline-none w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
