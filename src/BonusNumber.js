const MissionUtils = require("@woowacourse/mission-utils");

class BonusNumber {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  validate(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자 아님.");
    }
    if (!(number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 1-45");
    }
  }

  getBonusNumber() {
    return this.#number;
  }

  // TODO: 추가 기능 구현
}

module.exports = BonusNumber;
