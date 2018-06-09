function changePossibilities(amount, arr) {
  if (amount === 0) {
    return 1;
  }
  if (arr.length === 1) {
    if (amount % arr[0] === 0 && amount > 0) {
      return 1;
    } else {
      return 0;
    }
  }
  let total = 0;
  let seen = {};
  for (let i=0; i<arr.length; i++) {
    if ((amount - arr[i] > 0) && (amount%arr[i] === 0)) {
      total += 1;
    }
    if (seen[arr[i]] === undefined) {
      total += changePossibilities(amount-arr[i], arr.slice(0,i).concat(arr.slice(i+1,arr.length)));
      seen[amount-arr[i]] = true;
    }
  }
  return total;
}
