import { Chessboard } from "../../chessboard/Chessboard";
import { rows } from "../../chessboard/Chessboard";

const rookMoves = (currentRow, currentColumn, square) => {
	const posibilities = [];

	let nextSquareDown = currentColumn;
	let nextSquareUp = currentColumn;
	let nextSquareLeft = currentRow;
	let nextSquareRight = currentRow;
	let straight_down = null;
	let straight_up = null;
	let left = null;
	let right = null;

	/* BEHIND */
	while (nextSquareDown >= 1) {
		straight_down = rows[currentRow] + String(nextSquareDown);
		if (straight_down === square) {
			nextSquareDown--;
			continue;
		} else if (
			Chessboard.querySelector(`#${straight_down}`).childNodes.length === 0
		) {
			posibilities.push(Chessboard.querySelector(`#${straight_down}`));
			nextSquareDown--;
		} else {
			posibilities.push(Chessboard.querySelector(`#${straight_down}`));
			break;
		}
	}
	/* STRAIGHT */
	while (nextSquareUp <= 8) {
		straight_up = rows[currentRow] + String(nextSquareUp);
		if (straight_up === square) {
			nextSquareUp++;
			continue;
		} else if (
			Chessboard.querySelector(`#${straight_up}`).childNodes.length === 0
		) {
			posibilities.push(Chessboard.querySelector(`#${straight_up}`));
			nextSquareUp++;
		} else {
			posibilities.push(Chessboard.querySelector(`#${straight_up}`));
			break;
		}
	}
	/* LEFT */
	while (nextSquareLeft >= 0) {
		left = rows[nextSquareLeft] + String(currentColumn);
		if (left === square) {
			nextSquareLeft--;
			continue;
		} else if (Chessboard.querySelector(`#${left}`).childNodes.length === 0) {
			posibilities.push(Chessboard.querySelector(`#${left}`));
			nextSquareLeft--;
		} else {
			posibilities.push(Chessboard.querySelector(`#${left}`));
			break;
		}
	}
	/* RIGHT */
	while (nextSquareRight <= 7) {
		right = rows[nextSquareRight] + String(currentColumn);
		if (right === square) {
			nextSquareRight++;
			continue;
		} else if (Chessboard.querySelector(`#${right}`).childNodes.length === 0) {
			posibilities.push(Chessboard.querySelector(`#${right}`));
			nextSquareRight++;
		} else {
			posibilities.push(Chessboard.querySelector(`#${right}`));
			break;
		}
	}

	return posibilities;
};

export default rookMoves;
