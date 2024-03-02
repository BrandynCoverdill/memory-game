export default function Card({ characterName, characterImage }) {
	return (
		<div className='card'>
			<img src={characterImage} alt={characterName} />
			<h2>{characterName}</h2>
		</div>
	);
}
