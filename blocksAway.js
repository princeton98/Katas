const blocksAway = function(directions) {
  // make grid coordinates for start position ([0,0])
  // if right, turn taxi 90 degrees, increase x axis [0, x]
  // if first right, go right 
  // if left, turn taxi counterclockwise 90 degrees, increase y axis [y, 0]
  // if first left, go up
  // if 90, go right
  // if 0, go up
  // if -90, go left
  let taxiDirection = 0
  let taxiPosition = [0, 0]
  if (directions[0] === "right") {
    taxiDirection += 90;
    taxiPosition[0] += directions[1];
  }
  if (directions[0] === "left") {
    taxiDirection += 0;
    taxiPosition[1] += directions[1];
  }
  for (let i = 2; i < directions.length; i++ ) {
    if (directions[i] === "right") {
      taxiDirection += 90;
      taxiPosition[0] += directions[i + 1]
    }
    if (directions[i] === "left") {
      taxiDirection -= 90;
      taxiPosition[1] += directions[i + 1]
    }
  }
  console.log(taxiPosition);
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));