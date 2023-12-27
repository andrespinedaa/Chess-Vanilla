import { Chessboard } from "../chessboard/Chessboard";

const clearChessboard = () => {
    const chessboardCopy = [...Chessboard.children];

    chessboardCopy.forEach((element) => {
        element.classList.toggle("available", false);
        element.classList.toggle("unavailable", false);
    })

}

export default clearChessboard;