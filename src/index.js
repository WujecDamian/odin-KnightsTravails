//put inside src/index.js
import "./styles.css";
import { knightMoves } from "./scripts/knightMoves.js";

let knight = knightMoves();
const log = {
  title: (text) =>
    console.log(
      `%c${text}`,
      "color: #ff79c6; font-weight: bold; font-size: 16px;",
    ),
  success: (text) =>
    console.log(`%c${text}`, "color: #50fa7b; font-weight: bold;"),
  info: (text) => console.log(`%c${text}`, "color: #8be9fd;"),
  path: (text) =>
    console.log(`%c${text}`, "color: #f1fa8c; font-family: monospace;"),
  move: (text) => console.log(`%c${text}`, "color: #bd93f9;"),
  error: (text) =>
    console.log(`%c${text}`, "color: #ff5555; font-weight: bold;"),
};

// Colorful version of your calls
console.log(
  "%c♞ Knight Shortest Path Finder ♞",
  "color: #ff79c6; font-size: 18px; font-weight: bold; background: #282a36; padding: 8px 16px; border-radius: 8px;",
);

log.title("Test 1: From (0,0) → (3,3)");
const result1 = knight.findShortest([0, 0], [3, 3]);
console.log("─".repeat(60));

log.title("Test 2: From (3,3) → (0,0)");
const result2 = knight.findShortest([3, 3], [0, 0]);
console.log("─".repeat(60));

log.title("Test 3: From (0,0) → (7,7)");
const result3 = knight.findShortest([0, 0], [7, 7]);
console.log("─".repeat(60));

log.title("Test 4: From (4,0) → (3,7)");
const result4 = knight.findShortest([4, 0], [3, 7]);
console.log("─".repeat(60));

log.info("All tests completed! ♞");
