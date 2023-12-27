import posibilities from "../../scripts/posibilities";
import "./knight.css";

const Knight = (color) => {
	const knight = document.createElement("figure");
	knight.className = `knight ${color}`;

	knight.innerHTML = `
		<img src=${
			color === "White"
				? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
				: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
			} class="knightImage" alt="knight" />
	`;

	posibilities(knight);

	return knight;
};

export default Knight;
