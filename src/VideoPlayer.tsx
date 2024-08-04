import { useEffect, useMemo, useRef, useState } from "react";
import NoddingHead from "./Head";

type VideoPlayerProps = {
	id: string;
	bpm: number;
};

const overlayBg = "var(--bg)";

export default function VideoPlayer({ id, bpm }: VideoPlayerProps) {
	const [init, setInit] = useState(false);
	const [time, setTime] = useState(0);

	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (init) return;

		const intId = setInterval(() => {
			if (document.activeElement?.id === "videoframe") {
				setInit(true);
				clearInterval(intId);
			}
		}, 10);
	}, [init]);

	useEffect(() => {
		if (!init) return;

		const intId = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(intId);
	}, [init]);

	const reset = () => {
		const iframe = document.querySelector("iframe");
		if (!iframe) return;
		iframe.src = `https://www.youtube.com/embed/${id}`;
		setInit(false);
	};

	useEffect(() => {
		reset();
		setTime(0);
	}, [id]);

	const btns = useMemo(
		() => (
			<>
				{!init ? <OverLayNoInit /> : <OverLayInit />}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{
						position: "absolute",
						top: init ? "75%" : "50%",
						left: init ? "0%" : "50%",
						transform: init
							? "translate(50%, -50%)"
							: time > 0
							? "translate(-50%, -30%)"
							: "translate(-50%, -50%)",
						transition: "all 0.2s",
						height: init ? "30px" : "40px",
						width: init ? "30px" : "40px",
						pointerEvents: "none",
					}}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M2 5v14l12 -7z" />
					<path d="M18.5 5l0 14" />
					<path d="M23 5l0 14" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{
						position: "absolute",
						top: "75%",
						left: "65px",
						transform: "translateY(-50%)",
						transition: "all 0.2s",
						height: "30px",
						width: "30px",
						pointerEvents: "none",
						opacity: init ? 1 : 0,
					}}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M15 8a5 5 0 0 1 0 8" />
					<path d="M17.7 5a9 9 0 0 1 0 14" />
					<path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{
						position: "absolute",
						top: "75%",
						right: "12px",
						transform: "translateY(-50%)",
						transition: "all 0.2s",
						height: "30px",
						width: "30px",
						opacity: init ? 1 : 0,
						zIndex: 3,
						cursor: "pointer",
					}}
					onClick={reset}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
					<path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
				</svg>
				<div
					style={{
						position: "absolute",
						top: "10%",
						left: "50%",
						transform: init
							? "translateX(-50%)"
							: "translate(-50%, -25%) scale(0.7)",
						fontSize: "1.75rem",
						opacity: time > 0 ? 1 : 0,
						margin: 0,
						transition: "all 0.2s",
						zIndex: 3,
						pointerEvents: "none",
					}}
				>
					<NoddingHead songBPM={bpm} />
				</div>
			</>
		),
		[init, bpm, time]
	);

	return (
		<div className="player" ref={container}>
			{btns}
			<iframe
				width="300"
				height="100"
				src={`https://www.youtube.com/embed/${id}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen={false}
				id="videoframe"
				style={{ opacity: 0.01 }}
			></iframe>
		</div>
	);
}

function OverLayNoInit() {
	return (
		<>
			<div
				style={{
					position: "absolute",
					width: "calc((100% - 70px)/2)",
					height: "100%",
					background: overlayBg,
					zIndex: 2,
				}}
			></div>
			<div
				style={{
					position: "absolute",
					right: "0",
					width: "calc((100% - 70px)/2)",
					height: "100%",
					background: overlayBg,
					zIndex: 2,
				}}
			></div>
		</>
	);
}

function OverLayInit() {
	return (
		<>
			<div
				style={{
					position: "absolute",
					width: "100%",
					height: "60%",
					background: overlayBg,
					zIndex: 2,
				}}
			></div>
			<div
				style={{
					position: "absolute",
					right: "0",
					width: "calc(100% - 100px)",
					height: "100%",
					background: overlayBg,
					zIndex: 2,
				}}
			></div>
		</>
	);
}
