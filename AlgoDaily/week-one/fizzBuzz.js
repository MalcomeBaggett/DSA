function fizzBuzz(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) res += "fizzbuzz";
    else if (i % 5 === 0) res += "buzz";
    else if (i % 3 === 0) res += "fizz";
    else {
      res += `${i}`;
    }
  }
  return res;
}
