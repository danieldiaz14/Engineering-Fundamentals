const mergeSort = (data) => {
    if (data.length < 2) {
        return data;
    }
    const length = data.length;
    const middle = Math.floor(length/2);
    const left = data.slice(0, middle);
    const right = data.slice(middle, length);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return stitch(sortedLeft, sortedRight);
};

const stitch  = (left, right) => {
    const results = [];

    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    while(left.length) {
        results.push(left.shift());
    }

    while(right.length) {
        results.push(right.shift());
    }
    return results;
};