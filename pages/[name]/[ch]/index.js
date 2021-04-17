import Player from '../../../components/Player'
import books from '../../../data'

export const getStaticPaths = async () => {
	var paths = []
	await books.map(book => {
		book.chapters.map(chapter => {
			paths.push({
				params: {
					name: book.path,
					ch: chapter.path
				}
			})
		})
	})
	return ({
		paths,
		fallback: false
	})
}

export const getStaticProps = async (context) => {
	var book = await books.filter(book => book.path === context.params.name)[0]
	var chapter = await book.chapters.filter(chapter => chapter.path === context.params.ch)[0]
	return {
		props: {
			book,
			chapter
		}
	}
}

const Chapter = ({book, chapter}) => {
	return (
		<Player book={book} chapter={chapter}/>
	)
}

export default Chapter