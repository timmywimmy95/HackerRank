let a = [5, 6, 7, 8];
let b = [3, 6, 10, 9];

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  a.forEach((element, index) => {
    if (element > b[index]) {
      alice++;
    } else if (element < b[index]) {
      bob++;
    }
  });
  return [alice, bob];
}

console.log(compareTriplets(a, b));
