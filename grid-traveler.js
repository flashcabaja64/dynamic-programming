function gridTraveler(m, n) {
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
//console.log(gridTraveler(18, 18))

function gridMemo(m, n, memo = {}) {
  const key = `${m} , ${n}`;

  if(key in memo) return memo[key];
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;

  memo[key] = gridMemo(m - 1, n, memo) + gridMemo(m, n - 1, memo);

  return memo[key]
}

//console.log(gridMemo(18, 18))