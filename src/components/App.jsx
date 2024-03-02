import '../styles/App.css';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Board from '../components/Board';

function App() {
	// This is a free api key - dont have knowledge of putting this in the server-side yet.
	const apiKey = 'Pes8vjYEC0IqBz7wMJ7TB3mg7u4hwlju';
	const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10`;

	const [time, setTime] = useState(0);
	const [score, setScore] = useState(0);
	const [bestTime, setBestTime] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [isLoading, setIsLoading] = useState('loading');
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

	// TODO: Change the json loaded for some images to the ones below
	// 			if (character.name === 'Marceline the Vampire Queen') {
	// 				character.imageUrl = json.data[2].images.original.url;
	// 			} else if (character.name === 'Ice King') {
	// 				character.imageUrl = json.data[3].images.original.url;
	// 			} else if (character.name === 'Simon Petrikov') {
	// 				character.imageUrl = json.data[4].images.original.url;
	// 			} else if (character.name === 'Flame Princess') {
	// 				character.imageUrl = json.data[6].images.original.url;
	// 			} else if (character.name === 'Princess Bubblegum') {
	// 				character.imageUrl = json.data[9].images.original.url;
	// 			} else if (character.name === 'BMO') {
	// 				character.imageUrl = json.data[5].images.original.url;
	// 			} else {
	// 				character.imageUrl = json.data[0].images.original.url;
	// 			}

	useEffect(() => {
		// function to fetch data for each object in the characters array
		const fetchData = async (character) => {
			try {
				const response = await fetch(apiUrl + `&q=${character.searchName}`);
				const data = await response.json();
				// Get the url data for the character based on the fetched data
				const url = data.data[0].images.original.url;
				return {
					...character,
					imageUrl: url,
				};
			} catch (error) {
				console.error('Error: Failed to fetch data', error);
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
			});
		setIsLoading(false);
	}, []);

	return (
		<>
			<Header
				time={time}
				score={score}
				bestTime={bestTime}
				bestScore={bestScore}
			/>
			{isLoading ? <p>Loading...</p> : <Board characters={characters} />}
		</>
	);
}

export default App;
