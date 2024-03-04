import '../styles/Card.css';
import { useState } from 'react';

export default function Card({
	characterName,
	characterImage,
	shuffle,
	updateScore,
	loseGame,
	startGame,
}) {
	// Checks whether the card has been chosen previously
	const [selected, setSelected] = useState(false);

	return (
		<div
			className='card'
			onClick={() => {
				// shuffle the cards
				shuffle();
				// Check if the card has been selected before
				switch (selected) {
					case false:
						updateScore();
						setSelected(true);
						break;

					case true:
						loseGame();
						break;

					default:
						break;
				}
			}}
		>
			<div className='image'>
				<img src={characterImage} alt={characterName} />
			</div>
			<h2>{characterName}</h2>
		</div>
	);
}
