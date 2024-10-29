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
    initialList: Champion[];  // Liste complète non filtrée
    setList: React.Dispatch<React.SetStateAction<Champion[]>>;
}

const SearchBar = ({ initialList, setList }: SearchBarProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        // Filtre la liste chaque fois que la valeur de recherche change
        const filteredList = value
            ? initialList.filter((hero) =>
                hero.name.toLowerCase().includes(value.toLowerCase())
            )
            : initialList;

        setList(filteredList); // Met à jour uniquement avec les résultats filtrés ou la liste complète
    }, [value, initialList, setList]);

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