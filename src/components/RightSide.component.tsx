import "./RightSide.component.css";

interface RightSideProps {
  data?: {
    role: string;
    name: string;
    img: string;
    origin: string;
    species: string;
    description: string;
  };
}

function RightSide({ data }: RightSideProps) {
  return data ? (
    <>
      <div className="container">
        <img src={data.img} />

        <div className="container2">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <ul>
            <li>{data.origin}</li>
            <li>{data.species}</li>
            <li>{data.role}</li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="container-rightside">
        <img src="https://static.hitek.fr/img/actualite/ill_m/1683261399/league-of-legends-champions.jpg" />

        <div className="container-description">
          <h2>Please select a character</h2>
          <p>
            League of Legends boasts a diverse roster of over 160 champions,
            each with unique abilities and playstyles. Each champion has their
            own unique abilities, strengths, and weaknesses. To truly understand
            the depth and complexity of League of Legends, it's best to explore
            the game and experiment with different champions.
          </p>
          <ul>
            <li>Origin</li>
            <li>Species</li>
            <li>Role</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RightSide;
