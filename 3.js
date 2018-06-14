function makeChange(amount, arr) {
  let output = [];
  if (amount === 0) {
    return 1;
  }
  if (amount < 0) {
    return 0;
  }
  for (let i=1; i<=amount; i++) {
    output[i] = 0;
  }
  output[0] = 1;
  //iterate through the coins. for each coin value, update the total
  //number of change possibilities for the value and all of its consecutive
  //integers up to and including original amount.
  for (let i=0; i<arr.length; i++) {
    let coin = arr[i];
    for (let j=coin; j<=amount; j++) {
      //update the total number of change possibilities by a memoized amount
      output[j] += output[j-coin];
    }
  }
  return output[amount];
}
