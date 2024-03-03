import { useEffect } from 'react';
import Card from '../components/Card';
import '../styles/Board.css';

export default function Board({ characters }) {
	// randomize the order of the characters
	function randomizeCharacterOrder() {
		// get a copy of the character array
		const mixedCharacters = [];

		characters.map((char) => {
			mixedCharacters.push(char);
		});
		console.log(mixedCharacters);
	}

	const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function returnRandomOrder(arr) {
		// get copy of array passed in
		let copyArr = arr;
		// get the length of the array
		let length = copyArr.length;
		// create a blank array
		let newArr = [];
		// define a random index variable
		let randomIndex = 0;
		// while the length of the copy array is greater than zero
		let a = true;
		while (a) {
			// grab a random number as the index
			randomIndex = Math.floor(Math.random() * length);
			// push the random index'd value of the copied array to the new array
			newArr.push(copyArr[randomIndex]);
			// filter out that value from the copied array
			copyArr = copyArr.filter((item) => {
				return randomIndex !== copyArr.indexOf(item[randomIndex]);
			});
			// save that filted array as the copy array
			copyArr = updatedCopyArray;
			console.log('Updated Array: ' + copyArr);
			console.log('Generated array: ' + newArr);
			a = false;
		}

		return newArr;
	}

	useEffect(() => {
		// randomizeCharacterOrder();
		console.log(returnRandomOrder(array1));
	}, []);

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
