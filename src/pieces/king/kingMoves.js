import { rows } from "../../chessboard/Chessboard";
import { Chessboard } from "../../chessboard/Chessboard";

const kingMoves = (currentRow, currentColumn) => {
    const possibilities = [];

    if(currentColumn + 1 <= 8){
        const straigth = rows[currentRow] + String(currentColumn + 1);
        possibilities.push(Chessboard.querySelector(`#${straigth}`));
        if(currentRow - 1 >= 0){
            const straight_left = rows[currentRow - 1] + String(currentColumn + 1);
            possibilities.push(Chessboard.querySelector(`#${straight_left}`));
        }
        if(currentRow + 1 < 8){
            const straight_right = rows[currentRow + 1] + String(currentColumn + 1);
            possibilities.push(Chessboard.querySelector(`#${straight_right}`));
        }
    }
    if(currentColumn - 1 >= 1){
        const behind = rows[currentRow] + String(currentColumn - 1);
        possibilities.push(Chessboard.querySelector(`#${behind}`));
        if(currentRow + 1 < 8){
            const behind_right = rows[currentRow + 1] + String(currentColumn - 1);
            possibilities.push(Chessboard.querySelector(`#${behind_right}`));
        }
        if(currentRow - 1 >= 0){
            const behind_left = rows[currentRow - 1] + String(currentColumn - 1);
            possibilities.push(Chessboard.querySelector(`#${behind_left}`));
        }
    }
    if(currentRow + 1 < 8){
        const right = rows[currentRow + 1] + String(currentColumn);
        possibilities.push(Chessboard.querySelector(`#${right}`));
    }
    if(currentRow - 1 > 0){
        const left = rows[currentRow - 1] + String(currentColumn);
        possibilities.push(Chessboard.querySelector(`#${left}`));
    }

    return possibilities;
}

export default kingMoves;