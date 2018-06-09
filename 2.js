//i am assuming that the input is not going to contain
//more than one pair of open and closing brackets per level of nesting
//in other words,
//'4[b]5[c]test' is invalid input
//'4[b5[c]]test' is valid input
const decodeString = (str) => {
  //establish initial pointers by finding last int char
  let currentStr, leftInd, rightInd, leftAdd, rightAdd;
  for (let i=str.length-1; i>=0; i--) {
    if (!isNaN(str[i]-0)) {
      console.log(i);
      leftInd = i;
      rightInd = i;
      while (str[rightInd] != ']') {
        rightInd += 1;
      }
      currentStr = timesStr(str[leftInd], str.slice(leftInd+2,rightInd));
      break;
    }
  }
  while (!noMoreBrackets(str, leftInd, rightInd)){
    console.log(leftInd);
    console.log(rightInd);
    let newLeftInd = moveLeft(str, leftInd);
    leftAdd = str.slice(newLeftInd+1, leftInd);
    //move leftInd back one to get to the number before the open bracket
    leftInd = newLeftInd - 1;
    let newRightInd = moveRight(str, rightInd);
    rightAdd = str.slice(rightInd+1, newRightInd);
    rightInd = newRightInd;
    currentStr = leftAdd + currentStr + rightAdd;
    currentStr = timesStr(str[leftInd], currentStr);
  }
  //after the while loop above, grab the remaining chars from both sides
  //of the original string and append them the start/end of currentStr

  return str.slice(0, leftInd) + currentStr + str.slice(rightInd+1, str.length);

}

const moveLeft = (str, leftInd) => {
  let i = leftInd;
  while (str[i] !== '[') {
    i -= 1;
  }
  return i;
}

const moveRight = (str, rightInd) => {
  let i = rightInd+1;
  while (str[i] !== ']') {
    i += 1;
  }
  return i;
}

//return true if every char to the left of leftInd and the right of rightInd
//(non-inclusive) is NOT an open or closing bracket
const noMoreBrackets = (str, leftInd, rightInd) => {
  for (let i=0; i<leftInd; i++) {
    if (str[i] === '[' || str[i] === ']') {
      return false;
    }
  }
  for (let i=str.length-1; i>rightInd; i--) {
    if (str[i] === ']' || str[i] === '[') {
      return false;
    }
  }
  return true;
}

const timesStr = (n, str) => {
  let out = [];
  for (let i=0; i<n; i++) {
    out.push(str);
  }
  return out.join('');
}
