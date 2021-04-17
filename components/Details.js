import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';


const Details = ({book}) => {
	return (
		<Container>
			<Typography
				variant="h3"
				component="h2"
				color="textSecondary"
				align="center"
				style={{
					margin: "2vw auto"
				}}
			>
				{book.name}
			</Typography>
			<Grid container spacing={3}>
				{ book.chapters.map(chapter => (
					<Grid key={chapter.id} item xs={12} sm={6} md={4}>
						<Link href={`/${book.path}/${chapter.path}`}>
							<a>
								<Card elevation={4}>
									<CardActionArea>
										<CardContent
											align="center"
										>
								        	<MenuBookOutlinedIcon fontSize="large" color="primary" />
								        	<Typography
								        		variant="h5"
								        		component="h4"
								        		color="secondary"
								        		component="p"
								        	>
								            	{chapter.name}
								          	</Typography>
								        </CardContent>
									</CardActionArea>
								</Card>
							</a>
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Details