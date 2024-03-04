import '../styles/Card.css';

export default function Card({ characterName, characterImage, shuffle }) {
	return (
		<div className='card' onClick={shuffle}>
			<div className='image'>
				<img src={characterImage} alt={characterName} />
			</div>
			<h2>{characterName}</h2>
		</div>
	);
}
