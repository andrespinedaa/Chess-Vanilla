import {
	Bishop,
	King,
	Knight,
	Pawn,
	Queen,
	Rook,
} from "../pieces/index.pieces";

import { rows } from "../chessboard/Chessboard";

let INITIAL_POSITION_BISHOP = [
	{
		cordenate: "#c1",
		piece: Bishop("White"),
	},
	{
		cordenate: "#f1",
		piece: Bishop("White"),
	},
	{
		cordenate: "#c8",
		piece: Bishop("Black"),
	},
	{
		cordenate: "#f8",
		piece: Bishop("Black"),
	},
];

let INITIAL_POSITION_KNIGHT = [
	{
		cordenate: "#b1",
		piece: Knight("White"),
	},
	{
		cordenate: "#g1",
		piece: Knight("White"),
	},
	{
		cordenate: "#b8",
		piece: Knight("Black"),
	},
	{
		cordenate: "#g8",
		piece: Knight("Black"),
	},
];

let INITIAL_POSITION_ROOK = [
	{
		cordenate: "#a1",
		piece: Rook("White"),
	},
	{
		cordenate: "#h1",
		piece: Rook("White"),
	},
	{
		cordenate: "#a8",
		piece: Rook("Black"),
	},
	{
		cordenate: "#h8",
		piece: Rook("Black"),
	},
];

let INITIAL_POSITION_QUEEN = [
	{
		cordenate: "#d1",
		piece: Queen("White"),
	},
	{
		cordenate: "#e8",
		piece: Queen("Black"),
	},
];

let INITIAL_POSITION_KING = [
	{
		cordenate: "#e1",
		piece: King("White"),
	},
	{
		cordenate: "#d8",
		piece: King("Black"),
	},
];

let INITIAL_POSITION_PAWN = [
	...rows.map((row) => {
		return {
			cordenate: `#${row + "2"}`,
			piece: Pawn("White"),
		};
	}),
	...rows.map((row) => {
		return {
			cordenate: `#${row + "7"}`,
			piece: Pawn("Black"),
		};
	}),
];

let INITIAL_POSITION = [
	INITIAL_POSITION_BISHOP,
	INITIAL_POSITION_KNIGHT,
	INITIAL_POSITION_ROOK,
	INITIAL_POSITION_QUEEN,
	INITIAL_POSITION_KING,
	INITIAL_POSITION_PAWN,
];

const INITIAL_POSITION_PIECES = () => {
	INITIAL_POSITION.forEach((pieces) => {
		pieces.forEach((element) => {
			const { cordenate, piece } = element;
			document.querySelector(cordenate).append(piece);
		});
	});
};

export default INITIAL_POSITION_PIECES;
