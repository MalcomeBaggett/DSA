const isASubsequence = (sub, str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (sub[count] === str[i]) count++;
  }

  if (count === sub.length) return true;

  return false;
};
