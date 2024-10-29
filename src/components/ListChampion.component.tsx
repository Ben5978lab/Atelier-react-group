import data from "../data/championData.json";
import FilterList from "./FilterList";
import "./ListChampion.component.css";
import { useState, useEffect } from "react";

interface Champion {
  role: string;
  name: string;
  img: string;
  origine: string;
  species: string;
  description: string;
}

function ListChampion() {
  const [championList, setChampionList] = useState<Champion[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>("0");
  const [originFilter, setOriginFilter] = useState<string>("0");
  const [specieFilter, setSpecieFilter] = useState<string>("0");

  useEffect(() => {
    setChampionList(data);
  }, []);

  useEffect(() => {
    filterChampionList();
  }, [roleFilter, originFilter, specieFilter]);

  function filterChampionList() {
    const filters = {
      role: roleFilter !== "0" ? roleFilter : null,
      origin: originFilter !== "0" ? originFilter : null,
      species: specieFilter !== "0" ? specieFilter : null,
    };
    const filteredChampions = data.filter((hero) => {
      return (
        (!filters.role || hero.role === filters.role) &&
        (!filters.origin || hero.origine === filters.origin) &&
        (!filters.species || hero.species === filters.species)
      );
    });
    setChampionList(filteredChampions);
  }

  function handleOnCardClick(champion: string) {
    console.log(champion);
  }

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.name === "Role") setRoleFilter(e.target.value);
    else if (e.target.name === "Specie") setSpecieFilter(e.target.value);
    else if (e.target.name === "Origin") setOriginFilter(e.target.value);
  }
  return (
    <div>
      <div id="filters-container">
        <FilterList handleChange={handleFilterChange} data={data} />
      </div>
      <div id="list-champion-container">
        {championList.map((characterData) => {
          return (
            <div
              onClick={() => handleOnCardClick(characterData.name)}
              key={characterData.name}
              className="card-container"
            >
              <img src={characterData.img} alt={`hero ${characterData.name}`} />
              <h3>{characterData.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListChampion;
