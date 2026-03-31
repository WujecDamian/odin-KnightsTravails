import { visited } from "./visited.js";

export function knightMoves() {
  return {
    findShortest(startPoint, endPoint) {
      let visitedArr = visited();
      let queue = [];
      let parent = {}; // key = position (as string or array), value = previous position
      let startKey = JSON.stringify(startPoint); // or JSON.stringify if you prefer
      parent[startKey] = null; // start has no parent
      let founded;
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
              founded = [startPoint[0] + 1, startPoint[1] + 2];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] + 1, startPoint[1] + 2);
              queue.push([startPoint[0] + 1, startPoint[1] + 2]);
              parent[JSON.stringify([startPoint[0] + 1, startPoint[1] + 2])] =
                startPoint;
            }
          }
        }
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
              founded = [startPoint[0] - 1, startPoint[1] + 2];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] - 1, startPoint[1] + 2);
              queue.push([startPoint[0] - 1, startPoint[1] + 2]);
              parent[JSON.stringify([startPoint[0] - 1, startPoint[1] + 2])] =
                startPoint;
            }
          }
        }

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
              founded = [startPoint[0] + 2, startPoint[1] + 1];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] + 2, startPoint[1] + 1);
              queue.push([startPoint[0] + 2, startPoint[1] + 1]);
              parent[JSON.stringify([startPoint[0] + 2, startPoint[1] + 1])] =
                startPoint;
            }
          }
        }
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
              founded = [startPoint[0] + 2, startPoint[1] - 1];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] + 2, startPoint[1] - 1);
              queue.push([startPoint[0] + 2, startPoint[1] - 1]);
              parent[JSON.stringify([startPoint[0] + 2, startPoint[1] - 1])] =
                startPoint;
            }
          }
        }

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
              founded = [startPoint[0] + 1, startPoint[1] - 2];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] + 1, startPoint[1] - 2);
              queue.push([startPoint[0] + 1, startPoint[1] - 2]);
              parent[JSON.stringify([startPoint[0] + 1, startPoint[1] - 2])] =
                startPoint;
            }
          }
        }
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
              founded = [startPoint[0] - 1, startPoint[1] - 2];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] - 1, startPoint[1] - 2);
              queue.push([startPoint[0] - 1, startPoint[1] - 2]);
              parent[JSON.stringify([startPoint[0] - 1, startPoint[1] - 2])] =
                startPoint;
            }
          }
        }
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
              founded = [startPoint[0] - 2, startPoint[1] - 1];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] - 2, startPoint[1] - 1);
              queue.push([startPoint[0] - 2, startPoint[1] - 1]);
              parent[JSON.stringify([startPoint[0] - 2, startPoint[1] - 1])] =
                startPoint;
            }
          }
        }
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
              founded = [startPoint[0] - 2, startPoint[1] + 1];
            }
            if (hasFound === false) {
              visitedArr.add(startPoint[0] - 2, startPoint[1] + 1);
              queue.push([startPoint[0] - 2, startPoint[1] + 1]);
              parent[JSON.stringify([startPoint[0] - 2, startPoint[1] + 1])] =
                startPoint;
            }
          }
        }

        if (hasFound === true) {
          visitedArr.add(founded);
          parent[JSON.stringify(founded)] = startPoint;
        }
        moveKnightArray();
      }
      function reconstructPath() {
        /* we don't have last key (our endPoint) */
        let path = [];
        let current = JSON.stringify(endPoint);
        path.push(`${current[1]},${current[3]}`);
        while (current !== JSON.stringify(startPoint)) {
          path.push(parent[current]);
          current = JSON.stringify(parent[current]);
        }
        path.reverse();

        console.log(`${path.join(" => ")}`);
      }
      reconstructPath();
    },
  };
}
