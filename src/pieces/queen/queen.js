import posibilities from "../../scripts/posibilities";
import "./queen.css";

const Queen = (color) => {
	const queen = document.createElement("figure");
	queen.className = `queen ${color}`;

	queen.innerHTML = `
        <img src=${
            color === "White"
                ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png"
                : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png"
        } class="queenImage" alt="Queen" />
    `;

	posibilities(queen);

	return queen;
};

export default Queen;
