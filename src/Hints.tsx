import { useEffect, useMemo, useState } from "react";
import { ISO3166 } from "./const";
import { Game } from "./util";

type HintsProps = {
	game: Game;
};

export default function Hints({ game }: HintsProps) {
	const [hints, setHints] = useState(0);

	useEffect(() => {
		const rec: Record<string, number> = JSON.parse(
			localStorage.getItem("songdle_hints") || "{}"
		);
		setHints(rec[game.songId] || 0);
	}, [game]);

	useEffect(() => {
		if (hints === 0) return;
		const rec: Record<string, number> = JSON.parse(
			localStorage.getItem("songdle_hints") || "{}"
		);
		rec[game.songId] = hints;
		localStorage.setItem("songdle_hints", JSON.stringify(rec));
	}, [hints]);

	const _hints = useMemo(
		() => [
			`Artist: ${game.artist}`,
			`Song title: ${game.songTitle}`,
			`Language: ${game.language}`,
			`Country first letter: ${ISO3166[game.country].name[0]}`,
			`Country last letter: ${ISO3166[game.country].name.slice(-1)}`,
		],
		[game]
	);

	return (
		<div className="hints sb">
			<div className="fl-cn">
				<button
					onClick={() =>
						setHints((h) => Math.min(h + 1, _hints.length))
					}
					disabled={hints === _hints.length}
				>
					Show hint
				</button>
			</div>
			{_hints.slice(0, hints).map((hint, i) => (
				<p key={`h-${i}`}>{hint}</p>
			))}
		</div>
	);
}
