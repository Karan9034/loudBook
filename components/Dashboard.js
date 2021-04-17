import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	
})

const Dashboard = ({books}) => {

	const classes = useStyle()

	return (
		<Grid container spacing={3}>
			{ books.map(book => (
				<Grid key={book.id} item xs={12} sm={6} md={4}>
					<Link href={`/${book.path}`}>
						<a>
							<Card elevation={3}>
								<CardActionArea>
									<CardContent>
							        	<Typography gutterBottom variant="h4" component="h2" color="secondary">
							            	{book.name}
							        	</Typography>
							        	<Typography variant="body2" color="textSecondary" component="p">
							            	Author: {book.author}
							          	</Typography>
							        </CardContent>
								</CardActionArea>
							</Card>
						</a>
					</Link>
				</Grid>
				)
			)}
		</Grid>
	)
}

export default Dashboard