import posibilities from "../../scripts/posibilities";
import "./rook.css";

const Rook = (color) => {
	const rook = document.createElement("figure");
	rook.className = `rook ${color}`;

	rook.innerHTML = `
		<img src=${
			color === "White"
				? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
				: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
		} class="rookImage" alt="rook" />
	`;

	posibilities(rook);

	return rook;
};

export default Rook;
