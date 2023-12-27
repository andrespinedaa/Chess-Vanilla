import { Chessboard } from "../../chessboard/Chessboard";
import { rows } from "../../chessboard/Chessboard";

const knightMoves = (currentRow, currentColumn, piece) => {
	const posibilities = [];

	if(piece === "knightWhite"){
		/* STRAIGHT(RIGTH || LEFT) */
		if (currentColumn + 2 <= 8) {
			if (currentRow + 1 < 8) {
				const straight_right = rows[currentRow + 1] + String(currentColumn + 2);
				posibilities.push(Chessboard.querySelector(`#${straight_right}`));
			}
			if (currentRow - 1 >= 0) {
				const straight_left = rows[currentRow - 1] + String(currentColumn + 2);
				posibilities.push(Chessboard.querySelector(`#${straight_left}`));
			}
		}
		/* BEHIND(RIGHT || LEFT), */
		if (currentColumn - 2 >= 1) {
			if (currentRow + 1 < 8) {
				const behind_right = rows[currentRow + 1] + String(currentColumn - 2);
				posibilities.push(Chessboard.querySelector(`#${behind_right}`));
			}
			if (currentRow - 1 >= 0) {
				const behind_left = rows[currentRow - 1] + String(currentColumn - 2);
				posibilities.push(Chessboard.querySelector(`#${behind_left}`));
			}
		}
		/* RIGHT(UP || DOWN), */
		if (currentRow + 2 < 8) {
			if (currentColumn + 1 <= 8) {
				const right_up = rows[currentRow + 2] + String(currentColumn + 1);
				posibilities.push(Chessboard.querySelector(`#${right_up}`));
			}
			if (currentColumn - 1 >= 1) {
				const right_down = rows[currentRow + 2] + String(currentColumn - 1);
				posibilities.push(Chessboard.querySelector(`#${right_down}`));
			}
		}
		/* LEFT(UP || DOWN)*/
		if (currentRow - 2 >= 0) {
			if (currentColumn + 1 <= 8) {
				const left_up = rows[currentRow - 2] + String(currentColumn + 1);
				posibilities.push(Chessboard.querySelector(`#${left_up}`));
			}
			if (currentColumn - 1 >= 1) {
				const left_down = rows[currentRow - 2] + String(currentColumn - 1);
				posibilities.push(Chessboard.querySelector(`#${left_down}`));
			}
		}
	}else {
		/* STRAIGHT(RIGHT || LEFT) */
		if (currentColumn - 2 >= 1){
			if (currentRow + 1 < 8) {
				const straight_right = rows[currentRow + 1] + String(currentColumn - 2);
				posibilities.push(Chessboard.querySelector(`#${straight_right}`));
			}
			if (currentRow - 1 >= 0) {
				const straight_left = rows[currentRow - 1] + String(currentColumn - 2);
				posibilities.push(Chessboard.querySelector(`#${straight_left}`));
			}
		}
		/* BEHIND(RIGHT || LEFT) */
		if(currentColumn + 2 <= 8){
			if (currentRow + 1 < 8) {
				const behind_right = rows[currentRow + 1] + String(currentColumn + 2);
				posibilities.push(Chessboard.querySelector(`#${behind_right}`));
			}
			if (currentRow - 1 >= 0) {
				const behind_left = rows[currentRow - 1] + String(currentColumn + 2);
				posibilities.push(Chessboard.querySelector(`#${behind_left}`));
			}
		}
		/* RIGHT(UP || DOWN) */
		if (currentRow + 2 < 8) {
			if (currentColumn + 1 <= 8) {
				const right_up = rows[currentRow + 2] + String(currentColumn + 1);
				posibilities.push(Chessboard.querySelector(`#${right_up}`));
			}
			if (currentColumn - 1 >= 1) {
				const right_down = rows[currentRow + 2] + String(currentColumn - 1);
				posibilities.push(Chessboard.querySelector(`#${right_down}`));
			}
		}
		/* LEFT(UP || DOWN)*/
		if (currentRow - 2 >= 0) {
			if (currentColumn + 1 <= 8) {
				const left_up = rows[currentRow - 2] + String(currentColumn + 1);
				posibilities.push(Chessboard.querySelector(`#${left_up}`));
			}
			if (currentColumn - 1 >= 1) {
				const left_down = rows[currentRow - 2] + String(currentColumn - 1);
				posibilities.push(Chessboard.querySelector(`#${left_down}`));
			}
		}
	}

	return posibilities;
};

export default knightMoves;
