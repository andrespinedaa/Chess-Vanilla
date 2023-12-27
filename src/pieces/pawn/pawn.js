import posibilities from "../../scripts/posibilities";
import "./pawn.css";

const Pawn = (color) => {
	const pawn = document.createElement("figure");
	pawn.className = `pawn ${color}`;

	pawn.innerHTML = `
		<img src=${
			color === "White"
				? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
				: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
		} class="pawnImage" alt="pawn" />
	`;
	
	posibilities(pawn);

	return pawn;
};

export default Pawn;
