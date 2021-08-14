//Recursive Solution
function fib(num) {
  if(num <=2) return 1;

  return fib(num - 1) + fib(num - 2);
};

//Memoization

function fibMemo(num) {
  let memo = {};

  if(num <= 2) return 1;
  if(key in memo) return memo[key];

  memo[key] = fibMemo(num - 1) + fibMemo(num - 2);

  return memo[key]
}