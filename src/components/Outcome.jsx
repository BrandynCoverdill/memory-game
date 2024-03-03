import '../styles/Outcome.css';

export default function Outcome({
	time,
	score,
	bestTime,
	bestScore,
	gameStatus,
}) {
	switch (gameStatus) {
		case 'won':
			return (
				<section className='end-screen'>
					<h2>
						Game won<span className='font'>!</span>
					</h2>
					<p>Your statistics</p>
					<p>
						Time<span className='font'>: {time}</span>
					</p>
					<p>
						Score<span className='font'>: {score}</span>
					</p>
					<p>
						Best Time<span className='font'>: {bestTime}</span>
					</p>
					<p>
						Best Score<span className='font'>: {bestScore}</span>
					</p>
				</section>
			);
			break;

		case 'lost':
			return (
				<section className='end-screen'>
					<h2>
						Gameover<span className='font'>!</span>
					</h2>
					<p>Your statistics</p>
					<p>
						Time<span className='font'>: {time}</span>
					</p>
					<p>
						Score<span className='font'>: {score}</span>
					</p>
					<p>
						Best Time<span className='font'>: {bestTime}</span>
					</p>
					<p>
						Best Score<span className='font'>: {bestScore}</span>
					</p>
				</section>
			);
			break;

		default:
			break;
	}
}
