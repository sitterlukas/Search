import './card.styles.css';

type CardProps = {
    id: string,
    name: string,
    email: string
}

const Card = ({ id, name, email }: CardProps) => (
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2&size180x180`} alt={`monster ${name}`} />
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);

export default Card;
