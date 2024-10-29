import "./RightSide.component.css";

interface RightSideProps {
  data: {
    role: string;
    name: string;
    img: string;
    origin: string;
    species: string;
    description: string;
  };
}

function RightSide({ data }: RightSideProps) {
  return (
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
  );
}

export default RightSide;
