function rotateArray(arr, k) {
  // type your code here
  if (k > arr.length) {
    k = k%arr.length
  }
  const idx = arr.length - k
  newArr = arr.splice(idx)

  const superArr = newArr.concat(arr)
  return superArr
  // console.log(superArr)
  // arr = [1,2,3]; k=2; arr.length = 3. idx = (arr.length - k) = 1. newarr = arr.splice(1) = [2,3]. arr.unshift(newarr)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// splice from (arr.length - k - 1) to form new array and then shift from end of new arr back into previous arr.
// arr= [1, 2, 3, 4]; k=1 . arr.length = 4. i =(arr.length - k ) = 3. newarr = arr.splice(3) = [4]. arr.unshift(newarr)
// arr = [1,2,3]; k=2; arr.length = 3. i = (arr.length - k) = 1. newarr = arr.splice(1) = [2,3]. arr.unshift(newarr)
// And a written explanation of your solution
