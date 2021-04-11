const Player = ({book, chapter}) => {
	return (
		<div className='container'>
			<h3>{book.name} - {chapter.name}</h3>
		</div>
	)
}

export default Player