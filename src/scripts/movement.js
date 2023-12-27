import { rows } from "../chessboard/Chessboard";

import {
	bishopMoves,
	kingMoves,
	knightMoves,
	pawnMoves,
	queenMoves,
	rookMoves,
} from "../pieces/index.movements";

const movement = (piece, square) => {
	let currentRow = rows.indexOf(square[0]);
	let currentColumn = Number(square[1]);

	switch (piece) {
		case "pawn White":
		case "pawn Black":
			return pawnMoves(currentRow, currentColumn, piece);
		case "knight White":
		case "knight Black":
			return knightMoves(currentRow, currentColumn, piece);
		case "rook White":
		case "rook Black":
			return rookMoves(currentRow, currentColumn, square, piece);
		case "queen White":
		case "queen Black":
			return queenMoves(currentRow, currentColumn, square);
		case "bishop White":
		case "bishop Black":
			return bishopMoves(currentRow, currentColumn, square, piece);
		case "king White":
		case "king Black":
			return kingMoves(currentRow, currentColumn);
		default:
			break;
	}
};

export default movement;
