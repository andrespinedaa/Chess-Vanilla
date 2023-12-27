import { Chessboard } from "../chessboard/Chessboard";
import clearChessboard from "./clearChessboard";
import movement from "./movement";
let lastPiece = null;

const posibilities = (piece) => {
	piece.onclick = () => {
		if (piece.parentElement.classList[1] === "unavailable") {
			piece.parentElement.appendChild(lastPiece);
			piece.remove();
			clearChessboard();
		} else {
			let posibilities = movement(piece.className, piece.parentElement.id);
			posibilities.forEach((posibility) => {
				if (posibility.childNodes.length === 0) {
					posibility.classList.toggle("available");
				} else {
					if (
						piece.classList[1] !== posibility.firstElementChild.classList[1]
					) {
						posibility.classList.toggle("unavailable");
					}
				}

				posibility.onclick = () => {
					if (posibility.classList[1] === "available") {
						posibility.append(piece);
						clearChessboard();
					}
				};
			});
			lastPiece = piece;
		}
	};
};

export default posibilities;
