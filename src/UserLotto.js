const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
