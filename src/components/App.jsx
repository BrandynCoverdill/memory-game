import '../styles/App.css';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

function App() {
	const [time, setTime] = useState(0);
	const [score, setScore] = useState(0);
	const [bestTime, setBestTime] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	// https://developers.giphy.com/docs/api/endpoint#trending

	return (
		<>
			<Header
				time={time}
				score={score}
				bestTime={bestTime}
				bestScore={bestScore}
			/>
		</>
	);
}

export default App;
