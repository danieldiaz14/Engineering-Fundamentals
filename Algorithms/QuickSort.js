const quickSort = (data) => {
  if (data.length <= 1) return data;
  const pivot = data[data.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] <= pivot) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  return sortedLeft.concat(pivot, sortedRight);
};
