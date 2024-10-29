import Header from "./components/Header";
import ListChampion from "./components/ListChampion.component";

import { useState } from "react";

import "./index.css";
import "./data/championData.json";

interface Champion {
  role: string;
  name: string;
  img: string;
  origine: string;
  species: string;
  description: string;
}

function App() {
  const [championList, setChampionList] = useState<Champion[]>([]);
  const [searched, setSearched] = useState("");

  return (
    <>
      <Header searched={searched} setSearched={setSearched} />
      <ListChampion
        searched={searched}
        championList={championList}
        setChampionList={setChampionList}
      />
    </>
  );
}

export default App;
