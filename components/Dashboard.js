import Link from 'next/link'

const Dashboard = ({books}) => {
	return (
		<div className='container'>
			{ books.map(book => (
					<div key={book.id} className="col">
						<Link href={`/${book.path}`}><a><h3>{book.name}</h3></a></Link>
					</div>
				)
			)}
		</div>
	)
}

export default Dashboard