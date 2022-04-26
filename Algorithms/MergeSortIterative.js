const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result = result.concat(left).concat(right);

  return result;
};

const mergeSort = (data) => {
  if (data.length < 2) {
    return data;
  }

  let work = [],
    i,
    len;

  for (i = 0, len = data.length; i < len; i++) {
    work.push([data[i]]);
  }
  work.push([]);

  for (var lim = len; lim > 1; lim = Math.floor((lim + 1) / 2)) {
    for (var j = 0, k = 0; k < lim; j++, k += 2) {
      work[j] = merge(work[k], work[k + 1]);
    }
    work[j] = [];
  }
  return work[0];
};
