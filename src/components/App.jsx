import '../styles/App.css';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import Outcome from '../components/Outcome';

function App() {
	// This is a free api key - dont have knowledge of putting this in the server-side yet.
	const apiKey = 'Pes8vjYEC0IqBz7wMJ7TB3mg7u4hwlju';
	const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10`;

	const [time, setTime] = useState(0);
	const [score, setScore] = useState(0);
	const [bestTime, setBestTime] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [gameStatus, setGameStatus] = useState('loading');
	const [characters, setCharacters] = useState([
		{
			id: 1,
			name: 'BMO',
			searchName: 'BMO',
			imageUrl: '',
		},
		{
			id: 2,
			name: 'Finn Mertens',
			searchName: 'Finn-the-human',
			imageUrl: '',
		},
		{
			id: 3,
			name: 'Jake the Dog',
			searchName: 'Jake-the-dog',
			imageUrl: '',
		},
		{
			id: 4,
			name: 'Ice King',
			searchName: 'Ice-King',
			imageUrl: '',
		},
		{
			id: 5,
			name: 'Princess Bubblegum',
			searchName: 'Princess-Bubblegum',
			imageUrl: '',
		},
		{
			id: 6,
			name: 'Marceline the Vampire Queen',
			searchName: 'Marceline-adventure-time',
			imageUrl: '',
		},
		{
			id: 7,
			name: 'Cake the Cat',
			searchName: 'cake-the-cat-adventure-time',
			imageUrl: '',
		},
		{
			id: 8,
			name: 'Fionna Campbell',
			searchName: 'fionna-campbell-adventure-time',
			imageUrl: '',
		},
		{
			id: 9,
			name: 'Flame Princess',
			searchName: 'Flame-Princess',
			imageUrl: '',
		},
		{
			id: 10,
			name: 'Simon Petrikov',
			searchName: 'Simon-Petrikov',
			imageUrl: '',
		},
		{
			id: 11,
			name: 'Betty Grof',
			searchName: 'Betty-Grof',
			imageUrl: '',
		},
		{
			id: 12,
			name: 'Earl the Lemongrab',
			searchName: 'Earl-of-Lemongrab',
			imageUrl: '',
		},
	]);

	useEffect(() => {
		// function to fetch data for each object in the characters array
		const fetchData = async (character) => {
			try {
				const response = await fetch(apiUrl + `&q=${character.searchName}`);
				const data = await response.json();
				let url = '';
				// Get the url data for the character based on the fetched data
				if (character.id === 6) {
					// marceline
					url = data.data[2].images.original.url;
				} else if (character.id === 4) {
					// ice king
					url = data.data[3].images.original.url;
				} else if (character.id === 10) {
					// simon
					url = data.data[4].images.original.url;
				} else if (character.id === 9) {
					// flame princess
					url = data.data[6].images.original.url;
				} else if (character.id === 5) {
					// bubblegum
					url = data.data[9].images.original.url;
				} else if (character.id === 1) {
					// bmo
					url = data.data[5].images.original.url;
				} else {
					// other characters
					url = data.data[0].images.original.url;
				}
				return {
					...character,
					imageUrl: url,
				};
			} catch (error) {
				console.error('Error: Failed to fetch data', error);
				setGameStatus('error');
				return character;
			}
		};

		// Fetch data for each character
		Promise.all(characters.map(fetchData))
			.then((updatedCharacters) => {
				setCharacters(updatedCharacters);
			})
			.catch((error) => {
				console.error('Error: Could not fetch data for objects', error);
				setGameStatus('error');
			});
		if (gameStatus !== 'error') {
			setGameStatus('start');
		}
	}, []);

	// update the scores on card clicked
	function handleUpdateScores() {
		// if the score is equal to the best score, update both
		if (score === bestScore) {
			setScore((score) => score + 1);
			setBestScore((bestScore) => bestScore + 1);
		} else {
			// if the score is less than best score, update only current score
			setScore((score) => score + 1);
		}
		if (score >= 11) {
			setGameStatus('won');
		}
	}

	// Fires when the player loses the game
	function handleLoseGame() {
		setGameStatus('lost');
	}

	return (
		<>
			<Header
				time={time}
				score={score}
				bestTime={bestTime}
				bestScore={bestScore}
			/>
			{gameStatus === 'loading' ? (
				<p>Loading...</p>
			) : gameStatus === 'error' ? (
				<p>Error fetching data...</p>
			) : gameStatus === 'start' ? (
				<Board
					characters={characters}
					updateScore={handleUpdateScores}
					loseGame={handleLoseGame}
				/>
			) : gameStatus === 'lost' ? (
				<Outcome
					time={time}
					score={score}
					bestTime={bestTime}
					bestScore={bestScore}
					gameStatus={gameStatus}
				/>
			) : gameStatus === 'won' ? (
				<Outcome
					time={time}
					score={score}
					bestTime={bestTime}
					bestScore={bestScore}
					gameStatus={gameStatus}
				/>
			) : (
				<></>
			)}
		</>
	);
}

export default App;
