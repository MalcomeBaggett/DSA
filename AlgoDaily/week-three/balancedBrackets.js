const validateSymbols = (str) => {
  // implement this method
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];
  for (let val of str) {
    if (val === "{" || val === "[" || val === "(") {
      stack.push(val);
    } else {
      if (val === map[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};
