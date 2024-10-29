import Header from "./components/Header";
import ListChampion from "./components/ListChampion.component";
import RightSide from "./components/RightSide.component";
import "./index.css"
import "./data/championData.json"


function App() {
  return (
    <>
      <Header />
      <main>
        <ListChampion />
        <RightSide />
      </main>


    </>
  );
}

export default App;
