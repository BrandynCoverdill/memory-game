import { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../styles/Board.css';

export default function Board({ characters }) {
	// Copy of the characters as a state to shuffle
	const [shuffledCharacters, setShuffledCharacters] = useState([]);

	// shuffle the order of characters
	function shuffle() {
		// create copy of character array to shuffle
		let tempArr = characters.map((char) => {
			return char;
		});

		// Fisher-Yates shuffle algorithm on tempArr
		for (let i = tempArr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
		}

		// set the shuffled character state array to temp arr
		setShuffledCharacters(tempArr);

		return shuffledCharacters;
	}

	// On mount, shuffle the characters
	useEffect(() => {
		if (characters[characters.length - 1].imageUrl !== '') {
			setShuffledCharacters([]);
			console.log(shuffle());
		}
	}, [characters]);

	return (
		<div className='board'>
			{shuffledCharacters.map((character) => (
				<Card
					characterName={character.name}
					characterImage={character.imageUrl}
					key={character.searchName}
					shuffle={shuffle}
				/>
			))}
		</div>
	);
}
