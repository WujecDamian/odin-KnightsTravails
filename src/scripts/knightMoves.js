import { visited } from "./visited.js";

export function knightMoves() {
  return {
    findShortest(startPoint, endPoint) {
      let visitedArr = visited();

      /* visitedArr.visitedArr.forEach((element) => {
        moveKnight(element, endPoint);
      }); */

      function moveKnight(startPoint, endPoint) {
        if (
          startPoint[0] + 1 < 8 &&
          startPoint[1] + 2 < 8 &&
          startPoint[0] + 1 >= 0 &&
          startPoint[1] + 2 >= 0
        ) {
          if (
            startPoint[0] + 1 === endPoint[0] &&
            startPoint[1] + 2 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] + 1, startPoint[1] + 2])) {
            console.log(`up right ${[startPoint[0] + 1, startPoint[1] + 2]}`);
            visitedArr.add(startPoint[0] + 1, startPoint[1] + 2);
          }
        }

        if (
          startPoint[0] - 1 < 8 &&
          startPoint[1] + 2 < 8 &&
          startPoint[0] - 1 >= 0 &&
          startPoint[1] + 2 >= 0
        ) {
          if (
            startPoint[0] - 1 === endPoint[0] &&
            startPoint[1] + 2 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] - 1, startPoint[1] + 2])) {
            console.log(`up left ${[startPoint[0] - 1, startPoint[1] + 2]}`);
            visitedArr.add(startPoint[0] - 1, startPoint[1] + 2);
          }
        }
        / right up /;
        if (
          startPoint[0] + 2 < 8 &&
          startPoint[1] + 1 < 8 &&
          startPoint[0] + 2 >= 0 &&
          startPoint[1] + 1 >= 0
        ) {
          if (
            startPoint[0] + 2 === endPoint[0] &&
            startPoint[1] + 1 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] + 2, startPoint[1] + 1])) {
            console.log(`right up ${[startPoint[0] + 2, startPoint[1] + 1]}`);
            visitedArr.add(startPoint[0] + 2, startPoint[1] + 1);
          }
        }
        / right down /;
        if (
          startPoint[0] + 2 < 8 &&
          startPoint[1] - 1 < 8 &&
          startPoint[0] + 2 >= 0 &&
          startPoint[1] - 1 >= 0
        ) {
          if (
            startPoint[0] + 2 === endPoint[0] &&
            startPoint[1] - 1 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] + 2, startPoint[1] - 1])) {
            console.log(`right down ${[startPoint[0] + 2, startPoint[1] - 1]}`);
            visitedArr.add(startPoint[0] + 2, startPoint[1] - 1);
          }
        }
        /up left +1 -2/;
        //here  i get full stack error when there is too much if's
        if (
          startPoint[0] + 1 < 8 &&
          startPoint[1] - 2 < 8 &&
          startPoint[0] + 1 >= 0 &&
          startPoint[1] - 2 >= 0
        ) {
          if (
            startPoint[0] + 1 === endPoint[0] &&
            startPoint[1] - 2 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] + 1, startPoint[1] - 2])) {
            console.log(`down right${[startPoint[0] + 1, startPoint[1] - 2]}`);
            visitedArr.add(startPoint[0] + 1, startPoint[1] - 2);
          }
        }
        / down left -1 -2/;
        if (
          startPoint[0] - 1 < 8 &&
          startPoint[1] - 2 < 8 &&
          startPoint[0] - 1 >= 0 &&
          startPoint[1] - 2 >= 0
        ) {
          if (
            startPoint[0] - 1 === endPoint[0] &&
            startPoint[1] - 2 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] - 1, startPoint[1] - 2])) {
            console.log(`down left ${[startPoint[0] - 1, startPoint[1] - 2]}`);
            visitedArr.add(startPoint[0] - 1, startPoint[1] - 2);
          }
        }
        / left down -2 -1/;
        if (
          startPoint[0] - 2 < 8 &&
          startPoint[1] - 1 < 8 &&
          startPoint[0] - 2 >= 0 &&
          startPoint[1] - 1 >= 0
        ) {
          if (
            startPoint[0] - 2 === endPoint[0] &&
            startPoint[1] - 1 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] - 2, startPoint[1] - 1])) {
            console.log(`left down ${[startPoint[0] - 2, startPoint[1] - 1]}`);
            visitedArr.add(startPoint[0] - 2, startPoint[1] - 1);
          }
        }
        / left up -2 +1/;
        if (
          startPoint[0] - 2 < 8 &&
          startPoint[1] + 1 < 8 &&
          startPoint[0] - 2 >= 0 &&
          startPoint[1] + 1 >= 0
        ) {
          if (
            startPoint[0] - 2 === endPoint[0] &&
            startPoint[1] + 1 === endPoint[1]
          ) {
            console.log(`Found shortest path to ! ${endPoint}`);
          }
          if (!visitedArr.isVisited([startPoint[0] - 2, startPoint[1] + 1])) {
            console.log(`left up ${[startPoint[0] - 2, startPoint[1] + 1]}`);
            visitedArr.add(startPoint[0] - 2, startPoint[1] + 1);
          }
        }
        visitedArr.logVisited();
      }
    },
  };
}
