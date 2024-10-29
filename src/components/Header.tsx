import "./Header.css"
import "../index.css"
import SearchBar from "../components/SearchBar"
import data from '../data/championData.json'

interface Champion {
    role: string;
    name: string;
    img: string;
    origine: string;
    species: string;
    description: string;
}

function Header() {
    function handleOnChange(filteredData: Champion[]) {
        console.log(filteredData)
        // recuperation de la data filtrée
    }

    return (
        <header>
            <h1> LOL Champions Explorer</h1>
            <nav>
                <SearchBar initialList={data} handleOnChange={handleOnChange} />

            </nav>

        </header>
    );
}

export default Header;