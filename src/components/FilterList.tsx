import { useEffect, useState } from "react";

interface FilterListProps {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: {
    role: string;
    name: string;
    img: string;
    origine: string;
    species: string;
    description: string;
  }[];
}

interface Filters {
  roleTable: string[];
  origineTable: string[];
  specieTable: string[];
}

function FilterList({ data, handleChange }: FilterListProps) {
  const [filters, setFilters] = useState<Filters>({
    roleTable: [],
    origineTable: [],
    specieTable: [],
  });
  useEffect(() => {
    const tmpFilters: Filters = {
      roleTable: [],
      origineTable: [],
      specieTable: [],
    };
    for (const el of data) {
      if (!tmpFilters.roleTable.includes(el.role))
        tmpFilters.roleTable.push(el.role);
      if (!tmpFilters.origineTable.includes(el.origine))
        tmpFilters.origineTable.push(el.origine);
      if (!tmpFilters.specieTable.includes(el.species))
        tmpFilters.specieTable.push(el.species);
    }
    setFilters(tmpFilters);
  }, []);
  return (
    <>
      <select name="Role" onChange={handleChange}>
        <option value={"0"}>Role</option>
        {filters.roleTable.map((role, index) => {
          return <option key={index}>{role}</option>;
        })}
      </select>
      <select name="Origin" onChange={handleChange}>
        <option value={"0"}>Origin</option>
        {filters.origineTable.map((origin, index) => {
          return <option key={index}>{origin}</option>;
        })}
      </select>
      <select name="Specie" onChange={handleChange}>
        <option value={"0"}>Specie</option>
        {filters.specieTable.map((specie, index) => {
          return <option key={index}>{specie}</option>;
        })}
      </select>
    </>
  );
}

export default FilterList;
