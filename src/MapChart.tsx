import { memo, useMemo, useRef } from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from "react-simple-maps";
import { AVG, CODES } from "./const";

type MapChartProps = {
	withTooltip: boolean;
	onGuess: (id: string) => void;
	correct?: string[];
	incorrect?: string[];
};

const MapChart = ({
	withTooltip,
	onGuess,
	correct,
	incorrect,
}: MapChartProps) => {
	const tt = useRef<HTMLDivElement>(null);

	const ans = useMemo(
		() => CODES[Math.floor(Math.random() * CODES.length)],
		[]
	);

	const onMouseEnter = (
		ev: React.MouseEvent<SVGPathElement, MouseEvent>,
		geo: any
	) => {
		if (!tt.current || !withTooltip) return;
		tt.current.style.display = "block";
		tt.current.style.left = ev.clientX + "px";
		tt.current.style.top = ev.clientY + "px";
		tt.current.innerHTML = geo.properties.name;
	};

	const onMouseLeave = () => {
		if (!tt.current) return;
		tt.current.style.display = "none";
	};

	const distance = (point1: number[], point2: number[]) => {
		const dx = point1[0] - point2[0];
		const dy = point1[1] - point2[1];
		return Math.sqrt(dx * dx + dy * dy);
	};

	const onClick = (id: string & keyof typeof AVG) => {
		const o = AVG[id];
		const t = AVG[ans as keyof typeof AVG];
		distance(o, t);
		onGuess(id);
	};

	return (
		<div className="map">
			<ComposableMap height={800}>
				<ZoomableGroup zoom={1.5}>
					<Geographies geography="/map.json">
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									onMouseEnter={(ev) => onMouseEnter(ev, geo)}
									onMouseLeave={onMouseLeave}
									onClick={() => onClick(geo.id)}
									style={{
										default: {
											fill: correct?.includes(geo.id)
												? "var(--c6)"
												: incorrect?.includes(geo.id)
												? "var(--c3)"
												: "var(--c2)",
											outline: "none",
											transition: "all 100ms",
										},
										hover: {
											fill: correct?.includes(geo.id)
												? "var(--c6)"
												: incorrect?.includes(geo.id)
												? "var(--c3)"
												: "var(--c2-75)",
											outline: "red",
										},
									}}
								/>
							))
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
			<div ref={tt} className="tt"></div>
		</div>
	);
};

export default memo(MapChart);
