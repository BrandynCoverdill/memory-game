import '../styles/Card.css';

export default function Card({ characterName, characterImage }) {
	return (
		<div className='card'>
			<div className='image'>
				<img src={characterImage} alt={characterName} />
			</div>
			<h2>{characterName}</h2>
		</div>
	);
}
