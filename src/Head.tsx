type NoddingHeadProps = {
	songBPM: number;
};

export default function NoddingHead({ songBPM }: NoddingHeadProps) {
	return (
		<div className="nod">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 28 24"
				fill="none"
				stroke="var(--c2)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="hp"
				style={{
					position: "absolute",
					top: "-6px",
					left: "-4.6px",
				}}
			>
				<path
					d="M2 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"
					fill="var(--c5)"
				/>
				<path
					d="M22 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"
					fill="var(--c5)"
				/>
				<path d="M4 13a8 8 0 0 1 21 0" />
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
			>
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				<path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
				<path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
				<path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
			</svg>
			<style>{`
                .nod {
                    position: relative;
                    transform-origin: center bottom;
                    animation: nod ${
						60 / songBPM
					}s ease-in-out infinite alternate;
                }
                .hp {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}</style>
		</div>
	);
}
