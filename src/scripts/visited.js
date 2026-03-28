export function visited() {
  return {
    visitedArr: [],
    add(x, y) {
      this.visitedArr.push([x, y]);
    },
    logVisited() {
      console.table(this.visitedArr);
    },
  };
}
