function getPermutations(array) {
    // Write your code here.
      const permutations = []; // the array used to keep track of all permutations
      permutationsHelper(array, [], permutations);
      return permutations;
  }
  
  function permutationsHelper(array, currentPermutation, permutations) {
      if (!array.length && currentPermutation.length) { // if the current array is empty and the currentpermutation is not empty then...
          permutations.push(currentPermutation); // we found a new permutation. save the result.
      } else {
          for (let i = 0; i < array.length; i++) { // iterate over array
            const currentNumber = array[i];
              const newArray = array.slice(0, i).concat(array.slice(i + 1));
              const newPermutation = currentPermutation.concat([currentNumber]);
              permutationsHelper(newArray, newPermutation, permutations);
          }
      }
  }

const input = [1, 2, 3];
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1
// done.
// n * n!
// 3  * 3!

console.log(
    getPermutations(input)
)
