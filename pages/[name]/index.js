import Details from '../../components/Details'
import books from '../../data'

export const getStaticPaths = async () => {
	var paths = await books.map(book => ({
		params : {
			name : book.path
		}
	}))
	return ({
		paths,
		fallback: false
	})
}

export const getStaticProps = async (context) => {
	var book = await books.filter(book => book.path === context.params.name)[0]
	return ({
		props: {
			book 
		}
	})
}


const Book = ({book}) => {
	return (
		<Details book={book}/>
	)
}

export default Book