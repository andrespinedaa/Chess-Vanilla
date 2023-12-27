import { Chessboard } from "../../chessboard/Chessboard";
import { rows } from "../../chessboard/Chessboard";

const bishopMoves = (currentRow, currentColumn, square) => {
	let right = currentColumn;
	let left = currentColumn;
	let bottomRight = currentColumn;
	let bottomLeft = currentColumn;
	let posibilities = [];
	let diagonal = null;

	for (let nextRow = currentRow; nextRow < 8 && right <= 8; nextRow++) {
		diagonal = rows[nextRow] + String(right++);
		if (diagonal === square) {
			continue;
		} else if (
			Chessboard.querySelector(`#${diagonal}`).childNodes.length === 0
		) {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
		} else {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
			break;
		}
	}

	for (let nextRow = currentRow; nextRow >= 0 && left <= 8; nextRow--) {
		diagonal = rows[nextRow] + String(left++);
		if (diagonal === square) {
			continue;
		} else if (
			Chessboard.querySelector(`#${diagonal}`).childNodes.length === 0
		) {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
		} else {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
			break;
		}
	}

	for (let nextRow = currentRow; nextRow < 8 && bottomRight >= 1; nextRow++) {
		diagonal = rows[nextRow] + String(bottomRight--);
		if (diagonal === square) {
			continue;
		} else if (
			Chessboard.querySelector(`#${diagonal}`).childNodes.length === 0
		) {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
		} else {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
			break;
		}
	}

	for (let nextRow = currentRow; nextRow >= 0 && bottomLeft >= 1; nextRow--) {
		diagonal = rows[nextRow] + String(bottomLeft--);
		if (diagonal === square) {
			continue;
		} else if (
			Chessboard.querySelector(`#${diagonal}`).childNodes.length === 0
		) {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
		} else {
			posibilities.push(Chessboard.querySelector(`#${diagonal}`));
			break;
		}
	}

	return posibilities;
};

export default bishopMoves;
