import Card from '../components/Card';

export default function Board({ characters }) {
	return (
		<div className='board'>
			{characters.map((character) => (
				<Card
					characterName={character.name}
					characterImage={character.imageUrl}
				/>
			))}
		</div>
	);
}
