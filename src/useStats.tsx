import { useEffect, useState } from "react";
import { GameSession } from "./util";

export default function useStat(songId: string, country: string) {
	const [stat, setStat] = useState<GameSession>(
		JSON.parse(localStorage.getItem("songdle_stats") || "{}")?.[songId] ?? {
			songId: songId,
			won: false,
			guesses: [],
			ts: new Date().getTime(),
		}
	);

	const save = (_stat: GameSession) => {
		const _s = JSON.parse(localStorage.getItem("songdle_stats") || "{}");
		_s[stat.songId] = _stat;
		localStorage.setItem("songdle_stats", JSON.stringify(_s));
	};

	useEffect(() => save(stat), [stat]);

	useEffect(() => {
		save(stat);
		setStat(
			JSON.parse(localStorage.getItem("songdle_stats") || "{}")?.[
				songId
			] ?? {
				songId: songId,
				won: false,
				guesses: [],
				ts: new Date().getTime(),
			}
		);
	}, [songId]);

	const addGuess = (guess: string) => {
		if (stat.won || stat.guesses.includes(guess)) return;
		setStat({
			...stat,
			guesses: [...stat.guesses, guess],
		});
		if (guess === country) {
			setStat({
				...stat,
				won: true,
			});
		}
	};

	return { stat: { ...stat }, addGuess };
}
