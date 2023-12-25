//check if the path crosses its self


var isPathCrossing = function (path) {
  let arr = [[0, 0]];
  for (let i = 0; i < path.length; i++) {
    //add new element to array
    let newelement = [[arr[arr.length - 1][0], arr[arr.length - 1][1]]];
    arr.push(...newelement);

    if (path[i] == "N") {
      arr[arr.length - 1][1]++;
    } else if (path[i] == "S") {
      arr[arr.length - 1][1]--;
    } else if (path[i] == "E") {
      arr[arr.length - 1][0]++;
    } else {
      arr[arr.length - 1][0]--;
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].toString() == arr[j].toString()) {
        return true;
      }
    }
  }
  return false;
};
console.log(isPathCrossing("NESWW"));