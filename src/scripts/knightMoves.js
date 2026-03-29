import { ids } from "webpack";
import { visited } from "./visited.js";

export function knightMoves() {
  return {
    findShortest(startPoint, endPoint) {
      let visitedArr = visited();
      function moveKnight(startPoint, endPoint) {
        if (startPoint[0] + 1 < 8 && startPoint[1] + 2 < 8) {
          visitedArr.logVisited();
        }
        if (visitedArr[0] != [startPoint[0] + 1, startPoint[1] + 2]) {
          console.log(`${[startPoint[0] + 1, startPoint[1] + 2]}`);
          visitedArr.add(startPoint[0] + 1, startPoint[1] + 2);
          moveKnight([startPoint[0] + 1, startPoint[1] + 2], endPoint);
        }
      }
      /* up left /
        / if (startPoint[0] - 1 < 8 && startPoint[1] + 2 < 8) {
          moveKnight([startPoint[0] - 1, startPoint[1] + 2], endPoint);
        } /
        / right up /
        / if (startPoint[0] + 2 < 8 && startPoint[1] + 1 < 8) {
          moveKnight([startPoint[0] + 2, startPoint[1] + 1], endPoint);
        } /
        / right down /
        / if (startPoint[0] + 2 < 8 && startPoint[1] - 1 < 8) {
          moveKnight([startPoint[0] + 2, startPoint[1] - 1], endPoint);
        } /

        //here  i get full stack error when there is too much if's
        / down right /
        / if (startPoint[0] + 1 < 8 && startPoint[1] - 2 < 8) {
          moveKnight([startPoint[0] + 1, startPoint[1] - 2], endPoint);
        } /
        / down left /
        / if (startPoint[0] - 1 < 8 && startPoint[1] - 2 < 8) {
          moveKnight([startPoint[0] - 1, startPoint[1] - 2], endPoint);
        } /
        / left down /
        / if (startPoint[0] - 2 < 8 && startPoint[1] - 1 < 8) {
          moveKnight([startPoint[0] - 2, startPoint[1] - 1], endPoint);
        } /
        / left up /
        / if (startPoint[0] - 2 < 8 && startPoint[1] + 1 < 8) {
          moveKnight([startPoint[0] - 2, startPoint[1] + 1], endPoint);
        } */
      moveKnight(startPoint, endPoint);
    },
  };
}
