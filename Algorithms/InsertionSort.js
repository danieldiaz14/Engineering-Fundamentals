const insertionSort = (data) => {
  for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      if (data[i] < data[j]) {
        const spliced = data.splice(i, 1);
        data.splice(j, 0, spliced[0]);
      }
    }
  }
  return data;
};
