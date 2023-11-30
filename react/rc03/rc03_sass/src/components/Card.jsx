import "../scss/card.scss";

const Card = ({ veri }) => {
  return (
    <div className="person-wrap">
      {veri.map((person) => {
        const { id, name, job, comment, img } = person;
        return (
          <div className="person" key={id}>
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>"{comment}"</p>
            <img src={img} alt="" width={"100px"} />
            <div><button className="btn-1">Small</button><button className="btn-2">Large</button></div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
