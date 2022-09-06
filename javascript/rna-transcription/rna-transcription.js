export const toRna = (dna) => {
  return dna.split("").map(transcribe).join("");
};

const transcribe = (char) => {
  switch (char) {
    case "C":
      return "G";
      break;

    case "G":
      return "C";
      break;

    case "T":
      return "A";
      break;

    case "A":
      return "U";
      break;

    default:
      return "";
      break;
  }
};
