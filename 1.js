function sortByStrings(s,t) {
  let arr = s.split('');
  let indexHash = {};
  for (let i=0; i<t.length; i++) {
    indexHash[t[i]] = i;
  }
  return arr.sort((i,j) => {
    return indexHash[i] - indexHash[j];
  }).join('');
}
