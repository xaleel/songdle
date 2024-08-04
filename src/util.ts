export type Game = {
	gameTitle: string;
	songTitle: string;
	songId: string;
	songBPM: number;
	artist: string;
	country: string;
	date: string;
};

export type GameSession = {
	songId: string;
	guesses: string[];
	won: boolean;
	ts: number;
};

export function switchMode() {
	const html = document.documentElement;
	const currentMode = html.getAttribute("data-mode");
	const newMode = currentMode === "light" ? "dark" : "light";
	html.setAttribute("data-mode", newMode);
	localStorage.setItem("songdle_mode", newMode);
}

export function loadMode() {
	const mode = localStorage.getItem("songdle_mode") || "dark";
	document.documentElement.setAttribute("data-mode", mode);
	localStorage.setItem("songdle_mode", mode);
}

export class DateExt extends Date {
	fmt() {
		return this.toUTCString()
			.split(", ")[1]
			.split(/ \d\d:/)[0];
	}

	prevDay() {
		let clone = new DateExt(this);
		clone.setDate(this.getDate() - 1);
		return clone;
	}
}

console.log("Hello. ");
