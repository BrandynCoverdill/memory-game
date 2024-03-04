import '../styles/Header.css';

export default function Header({ score, bestScore }) {
	return (
		<header className='header'>
			<h1>Adventure Time Memory Game</h1>
			<div className='scores'>
				<div className='current-scores'>
					<p>
						Current Score<span className='font'>: {score}</span>
					</p>
				</div>
				<div className='best-scores'>
					<p>
						Best Score<span className='font'>: {bestScore}</span>
					</p>
				</div>
			</div>
		</header>
	);
}
