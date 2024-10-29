import "./Header.css";
import "../index.css";
import SearchBar from "../components/SearchBar";
import { Dispatch, SetStateAction } from "react";

interface Champion {
  role: string;
  name: string;
  img: string;
  origine: string;
  species: string;
  description: string;
}

interface HeaderProps {
  searched: string;
  setSearched: Dispatch<SetStateAction<string>>;
}

function Header({ searched, setSearched }: HeaderProps) {
  return (
    <header>
      <h1> LOL Champions Explorer</h1>
      <nav>
        <SearchBar searched={searched} setSearched={setSearched} />
        <button id="btn"> Validez</button>
      </nav>
    </header>
  );
}

export default Header;
