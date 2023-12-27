import { generatedChessboard } from './src/chessboard/Chessboard';
import INITIAL_POSITION_PIECES from './src/scripts/initialPosition';
import './style.css'

document.querySelector('#app').appendChild(generatedChessboard());
INITIAL_POSITION_PIECES();