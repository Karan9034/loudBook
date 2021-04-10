import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<div className='container'>
			<Navbar />
			<hr />
			{children}
			<Footer />
		</div>
	)
}

export default Layout