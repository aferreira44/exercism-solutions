export default class Words {
  count(phrase: string) {
    const result = new Map();
    phrase.split(new RegExp(" {1,}|\\n|\\t{1,}")).map((word) => {
      if (word) {
        word = word.toLowerCase();
        if (result.has(word)) {
          let value = result.get(word);
          result.set(word, ++value);
        } else {
          result.set(word, 1);
        }
      }
    });
    return result;
  }
}
