import { visited } from "./visited.js";

export function knightMoves() {
  return {
    findShortest(startPoint, endPoint) {
      let visitedArr = visited();
      let queue = [];
      let path = [];
      let hasFound = false;
      moveKnightArray();
      function moveKnightArray() {
        if (queue.length === 0) {
          moveKnight(startPoint, endPoint);
        }
        queue.forEach((element) => {
          if (hasFound === false) {
            moveKnight(element, endPoint);
          }
        });
      }
      console.log(`Visited array${visitedArr.visitedArr[2]}`);

      function moveKnight(startPoint, endPoint) {
        queue.splice(0, 1);

        if (
          visitedArr.isVisited([startPoint[0] + 1, startPoint[1] + 2]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] + 1, startPoint[1] + 2);
              path.push([startPoint[0] + 1, startPoint[1] + 2]);
            }
            if (hasFound === false) {
              console.log(`up right ${[startPoint[0] + 1, startPoint[1] + 2]}`);
              visitedArr.add(startPoint[0] + 1, startPoint[1] + 2);
              queue.push([startPoint[0] + 1, startPoint[1] + 2]);
            }
          }
        } else return;

        if (
          visitedArr.isVisited([startPoint[0] - 1, startPoint[1] + 2]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] - 1, startPoint[1] + 2);
              path.push([startPoint[0] - 1, startPoint[1] + 2]);
            }
            if (hasFound === false) {
              console.log(`up left ${[startPoint[0] - 1, startPoint[1] + 2]}`);
              visitedArr.add(startPoint[0] - 1, startPoint[1] + 2);
              queue.push([startPoint[0] - 1, startPoint[1] + 2]);
            }
          }
        } else return;
        / right up /;

        //! here path.push(startPoint); seems to work on knight.findShortest([4, 0], [3, 7]);

        if (
          visitedArr.isVisited([startPoint[0] + 2, startPoint[1] + 1]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] + 2, startPoint[1] + 1);
              path.push([startPoint[0] + 2, startPoint[1] + 1]);
            }
            if (hasFound === false) {
              console.log(`right up ${[startPoint[0] + 2, startPoint[1] + 1]}`);
              visitedArr.add(startPoint[0] + 2, startPoint[1] + 1);
              queue.push([startPoint[0] + 2, startPoint[1] + 1]);
            }
          }
        }
        / right down /;
        if (
          visitedArr.isVisited([startPoint[0] + 2, startPoint[1] - 1]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] + 2, startPoint[1] - 1);
              path.push([startPoint[0] + 2, startPoint[1] - 1]);
            }
            if (hasFound === false) {
              console.log(
                `right down ${[startPoint[0] + 2, startPoint[1] - 1]}`,
              );
              visitedArr.add(startPoint[0] + 2, startPoint[1] - 1);
              queue.push([startPoint[0] + 2, startPoint[1] - 1]);
            }
          }
        }

        /up left +1 -2/;
        //here  i get full stack error when there is too much if's
        if (
          visitedArr.isVisited([startPoint[0] + 1, startPoint[1] - 2]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] + 1, startPoint[1] - 2);
              path.push([startPoint[0] + 1, startPoint[1] - 2]);
            }
            if (hasFound === false) {
              console.log(
                `down right${[startPoint[0] + 1, startPoint[1] - 2]}`,
              );
              visitedArr.add(startPoint[0] + 1, startPoint[1] - 2);
              queue.push([startPoint[0] + 1, startPoint[1] - 2]);
            }
          }
        }

        / down left -1 -2/;
        if (
          visitedArr.isVisited([startPoint[0] - 1, startPoint[1] - 2]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] - 1, startPoint[1] - 2);
              path.push([startPoint[0] - 1, startPoint[1] - 2]);
            }
            if (hasFound === false) {
              console.log(
                `down left ${[startPoint[0] - 1, startPoint[1] - 2]}`,
              );
              visitedArr.add(startPoint[0] - 1, startPoint[1] - 2);
              queue.push([startPoint[0] - 1, startPoint[1] - 2]);
            }
          }
        }
        / left down -2 -1/;
        if (
          visitedArr.isVisited([startPoint[0] - 2, startPoint[1] - 1]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] - 2, startPoint[1] - 1);
              path.push([startPoint[0] - 2, startPoint[1] - 1]);
            }
            if (hasFound === false) {
              console.log(
                `left down ${[startPoint[0] - 2, startPoint[1] - 1]}`,
              );
              visitedArr.add(startPoint[0] - 2, startPoint[1] - 1);
              queue.push([startPoint[0] - 2, startPoint[1] - 1]);
            }
          }
        } else return;

        / left up -2 +1/;
        if (
          visitedArr.isVisited([startPoint[0] - 2, startPoint[1] + 1]) === false
        ) {
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
              hasFound = true;
              visitedArr.add(startPoint[0] - 2, startPoint[1] + 1);
              path.push([startPoint[0] - 2, startPoint[1] + 1]);
            }
            if (hasFound === false) {
              console.log(`left up ${[startPoint[0] - 2, startPoint[1] + 1]}`);
              visitedArr.add(startPoint[0] - 2, startPoint[1] + 1);
              queue.push([startPoint[0] - 2, startPoint[1] + 1]);
            }
          }
        }
        path.push(startPoint);
        visitedArr.logVisited();
        moveKnightArray();
      }
      function reconstructPath() {
        console.table(path);
      }
      reconstructPath();
    },
  };
}
