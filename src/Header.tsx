import { useEffect, useMemo, useState } from "react";
import Icon, { IconName } from "./Icon";
import { DateExt, Game, GameSession, switchMode } from "./util";
import Dialog from "./Dialog";
import { GAMES_SORTED } from "./const";

const iconSize = 28;

type MenuItem = {
	icon: IconName;
	label: string;
	onClick?: () => void;
};

type Dialogs = "how" | "stat" | "archive";

const dialogTitle: Record<Dialogs, string> = {
	how: "How to play",
	stat: "Stats",
	archive: "Archive",
};

export default function Header({
	setGame,
}: {
	setGame: React.Dispatch<React.SetStateAction<Game>>;
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [dialog, setDialog] = useState<Dialogs>();

	const items: MenuItem[] = useMemo(
		() => [
			{
				icon: "sun-moon",
				label: "Light/Dark Mode",
				onClick: () => switchMode(),
			},
			{
				icon: "chart",
				label: "Stats",
				onClick: () => setDialog("stat"),
			},
			{
				icon: "history",
				label: "Archive",
				onClick: () => setDialog("archive"),
			},
			{
				icon: "mailbox",
				label: "Contact me",
				onClick: () => window.open("mailto:songdle@khaleeljaber.com"),
			},
			{
				icon: "gh",
				label: "Source code",
				onClick: () => window.open("https://github.com/xaleel/songdle"),
			},
		],
		[]
	);

	useEffect(() => {
		if (!localStorage.getItem("songdle_init")) {
			localStorage.setItem("songdle_init", "true");
			setDialog("how");
		}
	}, []);

	return (
		<header>
			<Icon
				name="burger"
				className="icon"
				width={iconSize}
				height={iconSize}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<h1 className="m-0">Songdle</h1>
			<div className="fl-e gp-2">
				<div title="How to play">
					<Icon
						name="q"
						width={iconSize}
						height={iconSize}
						className="icon"
						onClick={() => setDialog("how")}
					/>
				</div>
			</div>
			<div className={"menu" + (isMenuOpen ? " active" : "")}>
				<div className="fl-e menu-item b-0">
					<Icon
						name="x"
						className="icon"
						onClick={() => setIsMenuOpen(false)}
					/>
				</div>
				{items.map((item, index) => (
					<div
						className="menu-item icon"
						key={"menu" + index}
						onClick={item.onClick}
					>
						<Icon
							name={item.icon}
							width={iconSize}
							height={iconSize}
						/>
						<p className="m-0">{item.label}</p>
					</div>
				))}
			</div>
			{!!dialog && (
				<Dialog
					title={dialogTitle[dialog]}
					body={
						<DialogBody
							dialog={dialog}
							setGame={(g) => {
								setGame(g);
								setDialog(undefined);
							}}
						/>
					}
					close={() => setDialog(undefined)}
				/>
			)}
		</header>
	);
}

function DialogBody({
	dialog,
	setGame,
}: {
	dialog: Dialogs;
	setGame: (game: Game) => void;
}) {
	const stats: GameSession[] = useMemo(
		() =>
			Object.values(
				JSON.parse(localStorage.getItem("songdle_stats") || "{}")
			),
		[]
	);
	const won = useMemo(() => stats.filter((s) => s.won), [stats]);

	const getAttempted = (game: Game) => {
		const stat = stats.find((s) => s.songId === game.songId);
		if (!stat) return "Not Attempted";
		if (!stat.won) return "In Progress";
		return `Won in ${stat.guesses.length + 1} Guesses`;
	};

	switch (dialog) {
		case "how":
			return (
				<div>
					<p>
						Click play, listen to the song, and guess the country it
						is from by clicking on it on the map.
					</p>
					<p>
						You have unlimited time to guess and unlimited guesses.
						But try to guess it right with as few guesses as
						possible.
					</p>
					<p>Enjoy listening ❤️</p>
				</div>
			);
		case "stat":
			const streak = (() => {
				let day = new DateExt();
				let today = true;
				let streak = 0;
				while (true) {
					if (
						won.some(
							(stat) => new DateExt(stat.ts).fmt() === day.fmt()
						)
					) {
						streak++;
						day = day.prevDay();
					} else {
						if (today) {
							day = day.prevDay();
							today = false;
							continue;
						}
						break;
					}
				}
				return streak;
			})();
			return (
				<div>
					<p>
						Games Played:&nbsp;&nbsp;<b>{won.length}</b>
					</p>
					<p>
						Streak:&nbsp;&nbsp;<b>{streak}</b>
					</p>
					<p>
						Average Guesses per Game:&nbsp;&nbsp;
						<b>
							{won.length
								? (
										won.reduce(
											(acc, curr) =>
												acc + curr.guesses.length + 1,
											0
										) / won.length
								  ).toFixed(2)
								: 0}
						</b>
					</p>
				</div>
			);
		case "archive":
			return (
				<div
					className="sb"
					style={{
						maxHeight: "600px",
						overflowY: "auto",
						paddingInlineEnd: "10px",
					}}
				>
					<br />
					<br />
					{GAMES_SORTED.map((game) => (
						<>
							<div
								key={game.songId}
								className="fl-b game"
								onClick={() => setGame(game)}
							>
								<div>
									<p className="m-0">
										<b>{game.gameTitle}</b>
									</p>
									<p className="mt-0 date">
										{new DateExt(game.date).fmt()}
									</p>
								</div>
								<p className="mt-0">{getAttempted(game)}</p>
							</div>
							<br />
						</>
					))}
				</div>
			);
	}
}
