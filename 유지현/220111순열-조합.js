// 순열
const input = [1, 2, 3];
let result_1 = [];
function permutation(arr, n, bucket) {
  if (n === 0) {
    result_1.push(bucket);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let pick = rest.splice(i, 1);
    let rest = arr.slice();
    permutation(rest, n - 1, bucket.concat(pick));
  }
  return result_1;
}

console.log(permutation(input, 2, []));

// 조합
let result_2 = [];
function combination(arr, n, bucket) {
  if (n === 0) {
    result_2.push(bucket);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let pick = arr[i];
    let rest = arr.slice(i + 1);
    combination(rest, n - 1, bucket.concat(pick));
  }
  return result_2;
}

console.log(combination(input, 2, []));
