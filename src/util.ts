export type Game = {
	gameTitle: string;
	songTitle: string;
	songId: string;
	songBPM: number;
	artist: string;
	language: string;
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
	constructor(init?: number | string | Date, UTCTZ?: boolean) {
		if (!init) super();
		else super(init);
		if (!UTCTZ) return this;
		const _date = new Date(
			super.toLocaleString("en-US", {
				timeZone: "UTC",
			})
		);
		var diff = super.getTime() - _date.getTime();
		this.setTime(super.getTime() - diff);
		return this;
	}

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

	isBefore(other: Date | DateExt) {
		return this.getTime() < other.getTime();
	}

	isAfter(other: Date | DateExt) {
		return this.getTime() > other.getTime();
	}

	isAtOrBefore(other: Date | DateExt) {
		return this.getTime() <= other.getTime();
	}

	isAtOrAfter(other: Date | DateExt) {
		return this.getTime() >= other.getTime();
	}
}

console.log(
	"Hello. The source code is available at github. There's a link in the menu :)"
);
