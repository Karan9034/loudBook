import Link from 'next/link'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
	return (
		<Link href='/'>
			<a>
				<Typography
					variant='h2'
					component='h1'
					align='center'
					color="primary"
				>
				AudioBooks
				</Typography>
			</a>
		</Link>
	)
}

export default Navbar;