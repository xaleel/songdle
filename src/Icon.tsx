// Source for all icons: https://tabler.io/icons

import { SVGProps } from "react";

export type IconName =
	| "sun-moon"
	| "chart"
	| "x"
	| "q"
	| "burger"
	| "history"
	| "mailbox"
	| "gh";

export default function Icon({
	name,
	...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
	switch (name) {
		case "sun-moon":
			return (
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
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" />
					<path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" />
					<path d="M3 12h1" />
					<path d="M12 3v1" />
					<path d="M5.6 5.6l.7 .7" />
					<path d="M3 21l18 -18" />
				</svg>
			);
		case "chart":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
					<path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
					<path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
					<path d="M4 20h14" />
				</svg>
			);
		case "x":
			return (
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
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M18 6l-12 12" />
					<path d="M6 6l12 12" />
				</svg>
			);
		case "q":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
					<path d="M12 19l0 .01" />
				</svg>
			);
		case "burger":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 6l16 0" />
					<path d="M4 12l16 0" />
					<path d="M4 18l16 0" />
				</svg>
			);
		case "history":
			return (
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
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 8l0 4l2 2" />
					<path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
				</svg>
			);
		case "mailbox":
			return (
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
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
					<path d="M12 11v-8h4l2 2l-2 2h-4" />
					<path d="M6 15h1" />
				</svg>
			);
		case "gh":
			return (
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
					{...props}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
				</svg>
			);
	}
}
