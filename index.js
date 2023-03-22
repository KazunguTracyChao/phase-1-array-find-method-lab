// code your solution here
function superbowlWin(arr) {
    const winningYearObj = arr.find(obj => obj.result === "W");
    //  ✔ returns undefined if the record has no win objects
    return winningYearObj ? winningYearObj.year : undefined;
  }
  