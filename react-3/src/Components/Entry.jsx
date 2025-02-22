export default function Entry(props) {
  return (
    <>
    <article className="art">
      <div className="img-container">
        <img className="mount" src={props.trip.img.src} alt={props.trip.img.alt}></img>
      </div>
      <div>
        <img className="loc" src="./Images/placeholder.png" alt="Loc"></img>
        <span>{props.trip.place}</span>
        <a href="#">View on Google Maps</a>
        <h2 className="title">{props.trip.title}</h2>
        <p className="date">{props.trip.date}</p>
        <p className="text">{props.trip.text} </p>
      </div>
    </article>
    
    </>
  );
}
