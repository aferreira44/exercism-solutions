export default class Squares {
  n: number;

  constructor(number: number) {
    this.n = number;
  }

  get squareOfSum(): number {
    let sum: number = 0;
    for (let i = 0; i <= this.n; i++) {
      sum += i;
    }

    return Math.pow(sum, 2);
  }

  get sumOfSquares(): number {
    let sum: number = 0;

    for (let i = 0; i <= this.n; i++) {
      sum += Math.pow(i, 2);
    }

    return sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
