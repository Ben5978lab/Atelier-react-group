import React, { useEffect, useState } from "react";


interface Champion {
    role: string;
    name: string;
    img: string;
    origine: string;
    species: string;
    description: string;
}

interface SearchBarProps {
    list: Champion[];
    setList: React.Dispatch<React.SetStateAction<Champion[]>>;
}

const SearchBar = ({ list, setList }: SearchBarProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (value) {
            setList(filterList());
        } else {
            setList(list);
        }
    }, [value]);

    const filterList = () => {
        return list.filter((champion) =>
            champion.name.toLowerCase().includes(value.toLowerCase())
        );
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Rechercher votre champion"
            name="search"
            onChange={handleChange}
            value={value}
        />
    );
};

export default SearchBar;