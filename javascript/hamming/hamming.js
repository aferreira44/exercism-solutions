export const compute = (strandA, strandB) => {
  validateArgs(strandA, strandB);

  let count = 0;

  for (let i = 0; i <= strandA.length; i++) {
    if (strandA[i] !== strandB[i]) {
      count++;
    }
  }
  return count;
};

function validateArgs(strandA, strandB) {
  if (!strandA && !strandB) {
    return;
  } else if (!strandA) {
    throw Error("left strand must not be empty");
  } else if (!strandB) {
    throw Error("right strand must not be empty");
  } else if (strandA.length != strandB.length) {
    throw Error("left and right strands must be of equal length");
  } else {
    return;
  }
}
