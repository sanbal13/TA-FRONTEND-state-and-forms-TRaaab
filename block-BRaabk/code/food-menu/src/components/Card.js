function Card(props) {
  return (
    <div className="card">
      <div className="flex flex-start">
        <img
          src={props.data.img}
          alt={props.data.title}
          width="400px"
          height="250px"
        />
        <div>
          <div className="flex underline">
            <h3 className="title">{props.data.title}</h3>
            <span className="price">{props.data.price}</span>
          </div>
          <p className="desc">{props.data.desc}</p>
        </div>
      </div>
      </div>
  );
}

export default Card;
