//put inside src/index.js
import "./styles.css";
import { knightMoves } from "./scripts/knightMoves.js";

let knight = knightMoves;
knight.findShortest([4, 0], [3, 7]);
