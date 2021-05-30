export const compute = (strandL, strandR) => {
  validateArgs(strandL, strandR);

  let count = 0;

  for (let i = 0; i <= strandL.length; i++) {
    if (strandL[i] !== strandR[i]) {
      count++;
    }
  }
  return count;
};

function validateArgs(strandL, strandR) {
  if (!strandL && !strandR) {
    return;
  } else if (!strandL) {
    throw Error("left strand must not be empty");
  } else if (!strandR) {
    throw Error("right strand must not be empty");
  } else if (strandL.length != strandR.length) {
    throw Error("left and right strands must be of equal length");
  } else {
    return;
  }
}
