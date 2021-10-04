function mergeIntervals(ranges) {
  ranges.sort(function (a, b) {
    return a[0] - b[0] || a[1] - b[1];
  });

  let result = [],
    last;

  ranges.forEach(function (r) {
    if (!last || r[0] > last[1]) {
      last = r;
      result.push(last);
    } else if (r[1] > last[1]) last[1] = r[1];
  });

  return result;
}
