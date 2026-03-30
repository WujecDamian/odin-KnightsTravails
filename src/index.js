//put inside src/index.js
import "./styles.css";
import { knightMoves } from "./scripts/knightMoves.js";

let knight = knightMoves();
knight.findShortest([0, 0], [3, 3]);
