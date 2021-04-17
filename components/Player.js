import {useState} from 'react'

const Player = ({book, chapter}) => {
	const [playing, setPlaying] = useState(true)


	const playPause = (e) => {
		if(playing){
			setPlaying(false)
			e.target.innerHTML = "Play"
		}
		else{
			e.target.innerHTML = "Pause"
			setPlaying(true)
		}
	}

	return (
		<div className='container'>
			<h3>{book.name} - {chapter.name}</h3>

			<div>
				<audio autoPlay={playing} src={`/audio/${book.path}/${chapter.path}.mp3`} preload="metadata" loop />
				<button onClick={playPause} >Pause</button>
				<input type="range" id="seek-slider" max="100" value="0" />
				<span id="current-time" class="time">0:00</span>
				<span id="duration" class="time">0:00</span>
				<output id="volume-output">100</output>
				<input type="range" id="seek-slider" max="100" value="100" />
				<button id="mute-icon">mute</button>
			</div>
		</div>
	)
}

export default Player