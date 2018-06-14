//doesn't work for changePossibilities(6, [1,2,3])
function changePossibilities(amount, numCoins, arr) {
  if (amount === 0) {
    return 1;
  } else if (amount < 0) {
    return 0;
  } else if (numCoins <= 0 && amount > 0) {
    return 0;
  }
  return changePossibilities(amount - arr[numCoins-1], numCoins, arr) + changePossibilities(amount, numCoins-1, arr);
}
