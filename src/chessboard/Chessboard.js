import "./chessboard.css";

export const maxColumn = 8;
export const minColumn = 1;
export const maxRow = 7;
export const minRow = 0;
export const rows = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const Chessboard = document.createElement("div");
Chessboard.className = "chessboard";
Chessboard.id = "chessboard";

export const generatedChessboard = () => {
	for (let column = maxColumn; column > minRow; column--) {
		rows.forEach((row) => {
			if (column % 2 === 0) {
				if (rows.indexOf(row) % 2 === 0) {
					Chessboard.append(generatedSquares(row, column, "White"));
				} else {
					Chessboard.append(generatedSquares(row, column, "Black"));
				}
			} else if (column % 2 !== 0) {
				if (rows.indexOf(row) % 2 === 0) {
					Chessboard.append(generatedSquares(row, column, "Black"));
				} else {
					Chessboard.append(generatedSquares(row, column, "White"));
				}
			}
		});
	}
	
	return Chessboard;
};

export const generatedSquares = (row, column, color) => {
	const Square = document.createElement("div");
	Square.className = `square${color}`;
	Square.id = row + column;
	return Square;
};
