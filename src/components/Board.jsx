import Card from '../components/Card';
import '../styles/Board.css';

export default function Board({ characters }) {
	return (
		<div className='board'>
			{characters.map((character) => (
				<Card
					characterName={character.name}
					characterImage={character.imageUrl}
					key={character.searchName}
				/>
			))}
		</div>
	);
}
