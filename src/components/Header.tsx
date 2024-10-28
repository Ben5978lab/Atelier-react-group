import "./Header.css"
import "../index.css"
import SearchBar from "../components/SearchBar"
import { useState } from "react"
import data from '../data/championData.json'

function Header() {
    const [list, setList] = useState(data)

    return (
        <header>
            <h1> LOL Champions Explorer</h1>
            <nav>
                <SearchBar list={list} setList={setList} />
                <button id="btn"> Validez</button>
            </nav>
        </header>
    );
}

export default Header;