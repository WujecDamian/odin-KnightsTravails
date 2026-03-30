export function visited() {
  return {
    visitedArr: [],
    add(x, y) {
      this.visitedArr.push([x, y]);
    },
    logVisited() {
      console.table(this.visitedArr);
    },
    isVisited(coordinates) {
      for (let i = 0; i < this.visitedArr.length; i++) {
        if (this.visitedArr[i] === coordinates) {
          return true;
        }
      }

      return false;
    },
  };
}
