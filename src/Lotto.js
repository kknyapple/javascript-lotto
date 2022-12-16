const MissionUtils = require("@woowacourse/mission-utils");

const { ERROR } = require("./constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.SIX_NUMBER);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.LOTTO.DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
