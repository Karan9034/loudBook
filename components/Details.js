import Link from 'next/link'

const Details = ({book}) => {
	return (
		<div className='container'>
			<h2>{book.name}</h2>
			<ul>
			{book.chapters.map( chapter => {
				return (
					<div key={chapter.id}>
						<Link href={`/${book.path}/${chapter.path}`}><a><li>{chapter.name}</li></a></Link>
					</div>
				)
			})}
			</ul>
		</div>
	)
}

export default Details