import {useState} from 'react'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Player = ({book, chapter}) => {
	return (
		<div className='container'>
			<Typography
				variant="h3"
				component="h2"
				color="textSecondary"
				align="center"
				style={{
					margin: "2vw auto"
				}}
			>{book.name} - {chapter.name}</Typography>

			<div>
				<AudioPlayer
				    loop={true}
				    preload="auto"
				    src={`/audio/${book.path}/${chapter.path}.mp3`}
				/>
			</div>
			<footer>
				<Link href={`/${book.path}`}><a>
					<Typography
						variant="body2"
						component="p"
						color="textSecondary"
						style={{
							textDecoration: "underline",
							marginTop: "5vw"
						}}
						align="center"
					>
					Go Back
					</Typography>
				</a></Link>
			</footer>
		</div>
	)
}

export default Player