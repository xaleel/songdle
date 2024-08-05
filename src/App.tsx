import { useEffect, useState } from "react";
import "./App.css";
import { GAMES_SORTED, ISO3166 } from "./const";
import Header from "./Header";
import MapChart from "./MapChart";
import useStat from "./useStats";
import { loadMode } from "./util";
import VideoPlayer from "./VideoPlayer";
import Hints from "./Hints";
import Dialog from "./Dialog";
import Icon from "./Icon";

function App() {
	const [game, setGame] = useState(GAMES_SORTED[0]);
	const [info, setInfo] = useState(false);

	const { stat, addGuess, justWon, dismiss } = useStat(
		game.songId,
		game.country
	);

	useEffect(loadMode, []);

	return (
		<div>
			<Header setGame={setGame} />
			<div className="g-3">
				<div className="fl-cn">
					{stat.won && (
						<button onClick={() => setInfo(true)}>
							Show song info
						</button>
					)}
				</div>
				<div className="fl-ccn">
					<h3 className="text-c mt-0">{game.gameTitle}</h3>
					<VideoPlayer id={game.songId} bpm={game.songBPM} />
				</div>
				<Hints game={game} />
			</div>
			<MapChart
				withTooltip
				incorrect={stat.guesses}
				onGuess={addGuess}
				correct={stat.won ? [game.country] : undefined}
			/>
			{(justWon || info) && (
				<Dialog
					title={"You won!"}
					body={
						<div>
							<br />
							<p>
								The song is "<b>{game.songTitle}</b>"
							</p>
							<p>
								By: <b>{game.artist}</b>
							</p>
							<p>
								From: <b>{ISO3166[game.country].name}</b>{" "}
								<img
									src={`https://flagcdn.com/16x12/${ISO3166[
										game.country
									].alpha2.toLowerCase()}.png`}
									width="16"
									height="12"
									alt="Ukraine"
								/>
							</p>
							<a
								href={`https://www.youtube.com/watch?v=${game.songId}`}
								target="_blank"
								className="link fl-cn"
							>
								Song on YouTube <Icon name="link" />
							</a>
						</div>
					}
					close={() => {
						dismiss();
						setInfo(false);
					}}
				/>
			)}
		</div>
	);
}

export default App;
