const testString = "abc";

const permutations = (str) => {
  let results = [];

  if (str.length === 1) return [str];

  for (let i = 0; i <= str.length - 1; i++) {
    const first = str[i];
    const charsRemaining = str.substring(0, i) + substring(i + 1);
    const remainngPerms = permuations(charsRemaining);
    for (let j = 0; j < remainingPerms.length; j++) {
      results.push(first + remainingPerms[j]);
    }
  }
  return results;
};
