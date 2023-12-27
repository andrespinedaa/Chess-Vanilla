import posibilities from "../../scripts/posibilities";
import "./bishop.css";

const Bishop = (color) => {
	const bishop = document.createElement("figure");
	bishop.className = `bishop ${color}`;

	bishop.innerHTML = `
        <img src=${
					color === "White"
						? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png"
						: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
				} class="bishopImage" alt="bishop${color}" />
    `;

	posibilities(bishop);

	return bishop;
};

export default Bishop;
