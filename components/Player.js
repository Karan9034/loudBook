const Player = ({book, chapter}) => {
	return (
		<div className='container'>
			<h3>{book.name} - {chapter.name}</h3>

			<div>
				<audio controls autoPlay loop>
					<source type="audio/mpeg" src={`/audio/${book.path}/${chapter.path}.mp3`} />
				</audio>
			</div>
		</div>
	)
}

export default Player