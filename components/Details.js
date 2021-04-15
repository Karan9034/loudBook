import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

const Details = ({book}) => {
	return (
		<Container>
			<Typography variant="h3" component="h2" color="textSecondary" align="center">{book.name}</Typography>
			<Container>
				<List>
					{ book.chapters.map(chapter => {
						<ListItem key={chapter.id}>
							<ListItemIcon><MenuBookOutlinedIcon /></ListItemIcon>
							<ListItemText primary={chapter.name} />
						</ListItem>
					})}
				</List>
			</Container>
		</Container>
	)
}

export default Details