import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import InboxIcon from '@material-ui/icons/Inbox';
import { makeStyles } from '@material-ui/core';


const Details = ({book}) => {
	return (
		<Container>
			<Typography variant="h3" component="h2" color="textSecondary" align="center">{book.name}</Typography>
			<Container>
				<List>
					{ book.chapters.map(chapter => (
						<Link key={chapter.id} href="/${book.path}/${chapter.path}">
							<a>
								<ListItem>
									<ListItemIcon><MenuBookOutlinedIcon /></ListItemIcon>
									<ListItemText primary={chapter.name} />
								</ListItem>
							</a>
						</Link>
					))}
				</List>
			</Container>
		</Container>
	)
}

export default Details