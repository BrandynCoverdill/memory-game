import '../styles/Header.css';

export default function Header({ time, score, bestTime, bestScore }) {
	return (
		<header className='header'>
			<h1>Adventure Time Memory Game</h1>
			<div className='scores'>
				<div className='current-scores'>
					<p>
						Current Score <span className='font'>{score}</span>
					</p>
					<p>
						Current Time <span className='font'>{time}</span>
					</p>
				</div>
				<div className='best-scores'>
					<p>
						Best Score <span className='font'>{bestScore}</span>
					</p>
					<p>
						Best Time <span className='font'>{bestTime}</span>
					</p>
				</div>
			</div>
		</header>
	);
}
