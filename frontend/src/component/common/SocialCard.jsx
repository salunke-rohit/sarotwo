import "./SocialCard.css";

function SocialCard({ image, name, description, link }) {
  return (
    
    <a href={link} target="_blank" rel="noopener noreferrer" className="cardLink">
      <div className="socialCard">
        <img src={image} alt={name} className="socialImg" />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default SocialCard;