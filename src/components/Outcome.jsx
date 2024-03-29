import '../styles/Outcome.css';

export default function Outcome({ score, bestScore, gameStatus, resetGame }) {
	switch (gameStatus) {
		case 'won':
			return (
				<section className='end-screen'>
					<h2>
						Game won<span className='font'>!</span>
					</h2>
					<p>Your statistics</p>
					<p>
						Score<span className='font'>: {score}</span>
					</p>
					<p>
						Best Score<span className='font'>: {bestScore}</span>
					</p>
					<button type='button' onClick={resetGame}>
						Play again
					</button>
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
						Score<span className='font'>: {score}</span>
					</p>
					<p>
						Best Score<span className='font'>: {bestScore}</span>
					</p>
					<button type='button' onClick={resetGame}>
						Play again
					</button>
				</section>
			);
			break;

		default:
			break;
	}
}
