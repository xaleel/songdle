import { useEffect, useState } from "react";
import "./App.css";
import { GAMES_SORTED } from "./const";
import Header from "./Header";
import MapChart from "./MapChart";
import useStat from "./useStats";
import { loadMode } from "./util";
import VideoPlayer from "./VideoPlayer";

function App() {
	const [game, setGame] = useState(GAMES_SORTED[0]);

	const { stat, addGuess } = useStat(game.songId, game.country);

	useEffect(loadMode, []);

	return (
		<div>
			<Header setGame={setGame} />
			<div className="fl-cn">
				<div>
					<h3 className="text-c mt-0">{game.gameTitle}</h3>
					<VideoPlayer id={game.songId} bpm={game.songBPM} />
				</div>
			</div>
			<MapChart
				withTooltip
				incorrect={stat.guesses}
				onGuess={addGuess}
				correct={stat.won ? [game.country] : undefined}
			/>
		</div>
	);
}

export default App;
