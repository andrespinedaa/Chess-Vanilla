import { Chessboard } from "../../chessboard/Chessboard";
import { rows } from "../../chessboard/Chessboard";

const pawnMoves = (currentRow, currentColumn, piece) => {
	const posibilities = [];

	if (piece === "pawn White") {
		if (currentColumn + 1 <= 8) {
			/* RIGHT */
			if (currentRow + 1 <= 7) {
				const right = rows[currentRow + 1] + String(currentColumn + 1);
				if (Chessboard.querySelector(`#${right}`).childNodes.length > 0) {
					posibilities.push(Chessboard.querySelector(`#${right}`));
				}
			}
			/* LEFT */
			if (currentRow - 1 >= 0) {
				const left = rows[currentRow - 1] + String(currentColumn + 1);
				if (Chessboard.querySelector(`#${left}`).childNodes.length > 0) {
					posibilities.push(Chessboard.querySelector(`#${left}`));
				}
			}
			if (
				Chessboard.querySelector(
					`#${rows[currentRow] + String(currentColumn + 1)}`
				).childNodes.length === 0
			) {
				posibilities.push(
					Chessboard.querySelector(
						`#${rows[currentRow] + String(currentColumn + 1)}`
					)
				);
			}
		}
	} else {
		if (currentColumn - 1 >= 1) {
			/* RIGHT */
			if (currentRow + 1 <= 7) {
				const right = rows[currentRow + 1] + String(currentColumn - 1);
				if (Chessboard.querySelector(`#${right}`).childNodes.length > 0) {
					posibilities.push(Chessboard.querySelector(`#${right}`));
				}
			}
			/* LEFT */
			if (currentRow - 1 >= 0) {
				const left = rows[currentRow - 1] + String(currentColumn - 1);
				if (Chessboard.querySelector(`#${left}`).childNodes.length > 0) {
					posibilities.push(Chessboard.querySelector(`#${left}`));
				}
			}
			if (
				Chessboard.querySelector(
					`#${rows[currentRow] + String(currentColumn - 1)}`
				).childNodes.length === 0
			) {
				posibilities.push(
					Chessboard.querySelector(
						`#${rows[currentRow] + String(currentColumn - 1)}`
					)
				);
			}
		}
	}

	return posibilities;
};

export default pawnMoves;
