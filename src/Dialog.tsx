import { ReactNode, useEffect } from "react";
import Icon from "./Icon";

type DialogProps = {
	title: string;
	body: ReactNode;
	close: () => void;
};

export default function Dialog({ title, body, close }: DialogProps) {
	const _close = () => {
		document.querySelector(".dialog")?.classList.remove("opening");
		setTimeout(() => {
			close();
		}, 200);
	};

	useEffect(() => {
		setTimeout(() => {
			document.querySelector(".dialog")?.classList.add("opening");
		}, 40);
	}, []);

	return (
		<div className="dialog">
			<div className="overlay" onClick={_close}></div>
			<div className="dialog-box">
				<h2>{title}</h2>
				<Icon name="x" className="icon" onClick={_close} />
				{body}
			</div>
			<style>{`
                .dialog {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 999;
                    transition: opacity 0.2s;
                    opacity: 0;
                }
                .dialog.opening {
                    opacity: 1;
                }
                .dialog.closing {
                    opacity: 0;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(5px);
                }
                .dialog-box {
                    position: relative;
                    width: 80%;
                    max-width: 400px;
                    background: var(--bg);
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border: 1px solid var(--fg);
                    padding: 20px;
                }
                .dialog-box h2 {
                    margin: 0;
                    padding: 0;
                    font-size: 24px;
                    text-align: center;
                }
                .dialog-box > .icon {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                }
            `}</style>
		</div>
	);
}
