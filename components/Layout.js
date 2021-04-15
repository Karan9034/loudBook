import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
import Container from '@material-ui/core/Container'


const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<Navbar />
			<hr />
			{children}
			<Footer />
		</Container>
	)
}

export default Layout