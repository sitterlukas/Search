import './card.styles.css';

const Card = ({ id, name, email }) => (
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2&size180x180`} alt={`monster ${name}`} />
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);

export default Card;
