import posibilities from "../../scripts/posibilities";
import "./king.css";

const King = (color) => {
	const king = document.createElement("figure");
	king.className = `king ${color}`;

	king.innerHTML = `
		<img src=${
			color === "White"
				? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png"
				: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png"
			} class="kingImage" alt="King" />
	`;

	posibilities(king);

	return king;
};

export default King;
