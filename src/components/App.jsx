import '../styles/App.css';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';

function App() {
	// This is a free api key - dont have knowledge of putting this in the server-side yet.
	const apiKey = 'Pes8vjYEC0IqBz7wMJ7TB3mg7u4hwlju';
	const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1`;

	const [time, setTime] = useState(0);
	const [score, setScore] = useState(0);
	const [bestTime, setBestTime] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	const characters = [
		{
			name: 'BMO',
			searchName: 'BMO',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Finn Mertens',
			searchName: 'Finn-the-human',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Jake the Dog',
			searchName: 'Jake-the-dog',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Ice King',
			searchName: 'Ice-King',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Princess Bubblegum',
			searchName: 'Princess-Bubblegum',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Marceline the Vampire Queen',
			searchName: 'Marceline-the-vampire-queen',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Cake the Cat',
			searchName: 'cake-the-cat-adventure-time',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Fionna Campbell',
			searchName: 'fionna-campbell-adventure-time',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Flame Princess',
			searchName: 'Flame-Princess',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Simon Petrikov',
			searchName: 'Simon-Petrikov',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Betty Grof',
			searchName: 'Betty-Grof',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
		{
			name: 'Earl the Lemongrab',
			searchName: 'Earl-of-Lemongrab',
			imageUrl:
				'https://media4.giphy.com/media/qQ2CKQltE4D9S/giphy.gif?cid=e2a20fbd77t9xycx3xdmxs2rydnb3vfgvubzhndwho55fsbj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
		},
	];

	async function fetchCharacterData() {
		for (const character of characters) {
			await fetch(apiUrl + `&q=${character.searchName}`)
				.then((response) => response.json())
				.then((json) => {
					character.imageUrl = json.data[0].images.original.url;
				});
		}
		characters.map((c) => console.log(c.imageUrl));
	}

	// fetchCharacterData();

	return (
		<>
			<Header
				time={time}
				score={score}
				bestTime={bestTime}
				bestScore={bestScore}
			/>
			<Board characters={characters} />
		</>
	);
}

export default App;
