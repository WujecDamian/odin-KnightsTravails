import { visited } from "./visited.js";

export function knightMoves() {
  return {
    findShortest(startPoint, endPoint) {
      let visitedArr = visited();
      moveKnight(startPoint, endPoint);

      function moveKnight(startPoint, endPoint) {
        if (startPoint[0] + 1 < 8 && startPoint[1] + 2 < 8) {
          visitedArr.logVisited();
          if (
            startPoint[0] + 1 === endPoint[0] &&
            startPoint[1] + 2 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] + 1, startPoint[1] + 2])) {
            console.log(`${[startPoint[0] + 1, startPoint[1] + 2]}`);
            visitedArr.add(startPoint[0] + 1, startPoint[1] + 2);
            moveKnight([startPoint[0] + 1, startPoint[1] + 2], endPoint);
          }
        }
      }

      if (startPoint[0] - 1 < 8 && startPoint[1] + 2 < 8) {
        visitedArr.logVisited();
        if (
          startPoint[0] - 1 === endPoint[0] &&
          startPoint[1] + 2 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] - 1, startPoint[1] + 2])) {
          console.log(`${[startPoint[0] - 1, startPoint[1] + 2]}`);
          visitedArr.add(startPoint[0] - 1, startPoint[1] + 2);
          moveKnight([startPoint[0] - 1, startPoint[1] + 2], endPoint);
        }
      }
      / right up /;
      if (startPoint[0] + 2 < 8 && startPoint[1] + 1 < 8) {
        visitedArr.logVisited();
        if (
          startPoint[0] + 2 === endPoint[0] &&
          startPoint[1] + 1 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] + 2, startPoint[1] + 1])) {
          console.log(`${[startPoint[0] + 2, startPoint[1] + 1]}`);
          visitedArr.add(startPoint[0] + 2, startPoint[1] + 1);
          moveKnight([startPoint[0] + 2, startPoint[1] + 1], endPoint);
        }
      }
      / right down /;
      if (startPoint[0] + 2 < 8 && startPoint[1] - 1 < 8) {
        visitedArr.logVisited();
        if (
          startPoint[0] + 2 === endPoint[0] &&
          startPoint[1] - 1 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] + 2, startPoint[1] - 1])) {
          console.log(`${[startPoint[0] + 2, startPoint[1] - 1]}`);
          visitedArr.add(startPoint[0] + 2, startPoint[1] - 1);
          moveKnight([startPoint[0] + 2, startPoint[1] - 1], endPoint);
        }
      }
      /up left +1 -2/;
      //here  i get full stack error when there is too much if's
      if (startPoint[0] + 1 < 8 && startPoint[1] - 2 < 8) {
        visitedArr.logVisited();
        if (
          startPoint[0] + 1 === endPoint[0] &&
          startPoint[1] - 2 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] + 1, startPoint[1] - 2])) {
          console.log(`${[startPoint[0] + 1, startPoint[1] - 2]}`);
          visitedArr.add(startPoint[0] + 1, startPoint[1] - 2);
          moveKnight([startPoint[0] + 1, startPoint[1] - 2], endPoint);
        }
      }
      / down left -1 -2/;
      if (startPoint[0] - 1 < 8 && startPoint[1] - 2 < 8) {
        visitedArr.logVisited();
        if (
          startPoint[0] - 1 === endPoint[0] &&
          startPoint[1] - 2 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] - 1, startPoint[1] - 2])) {
          console.log(`${[startPoint[0] - 1, startPoint[1] - 2]}`);
          visitedArr.add(startPoint[0] - 1, startPoint[1] - 2);
          moveKnight([startPoint[0] - 1, startPoint[1] - 2], endPoint);
        }
      }
      / left down -2 -1/;
      if (startPoint[0] - 2 < 8 && startPoint[1] - 1 < 8) {
        visitedArr.logVisited();
        if (
          startPoint[0] - 2 === endPoint[0] &&
          startPoint[1] - 1 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] - 2, startPoint[1] - 1])) {
          console.log(`${[startPoint[0] - 2, startPoint[1] - 1]}`);
          visitedArr.add(startPoint[0] - 2, startPoint[1] - 1);
          moveKnight([startPoint[0] - 2, startPoint[1] - 1], endPoint);
        }
      }
      / left up -2 +1/;
      if (
        startPoint[0] - 2 < 8 &&
        startPoint[1] + 1 < 8 &&
        startPoint[0] - 2 >= 0 &&
        startPoint[1] >= 0
      ) {
        visitedArr.logVisited();
        if (
          startPoint[0] - 2 === endPoint[0] &&
          startPoint[1] + 1 === endPoint[1]
        ) {
          console.log(`Found shortest path to ! ${endPoint}`);
        }
        if (!visitedArr.isVisited([startPoint[0] - 2, startPoint[1] + 1])) {
          console.log(`${[startPoint[0] - 2, startPoint[1] + 1]}`);
          visitedArr.add(startPoint[0] - 2, startPoint[1] + 1);
          moveKnight([startPoint[0] - 2, startPoint[1] + 1], endPoint);
        }
      }
    },
  };
}
