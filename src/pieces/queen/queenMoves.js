import kingMoves from "../king/kingMoves";
import bishopMoves from "../bishop/bishopMoves";
import rookMoves from "../rook/rookMoves";

const queenMoves = (currentRow, currentColumn, square) => {
	let possibilities = [];
	possibilities = [...possibilities, ...kingMoves(currentRow, currentColumn)];
	possibilities = [
		...possibilities,
		...bishopMoves(currentRow, currentColumn, square),
	];
	possibilities = [
		...possibilities,
		...rookMoves(currentRow, currentColumn, square),
	];

	return possibilities;
};

export default queenMoves;
