const MissionUtils = require("@woowacourse/mission-utils");

const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { ERROR } = require("./constant");

class GameController {
  constructor(numbers) {}

  isNumber(number) {
    return !isNaN(number);
  }

  isThousandUnit(number) {
    if (this.isNumber(number)) {
      return !!(number % 1000 === 0);
    }
  }

  validate(number) {
    if (!this.isNumber(number)) {
      throw new Error("[ERROR] 숫자 아님.");
    }
    if (!this.isThousandUnit(number)) {
      throw new Error("[ERROR] 1000 단위 부탁");
    }
  }

  purchase(money) {
    this.validate(money);

    OutputView.printLottos(money);
  }

  game() {
    InputView.printPurchase(this.purchase.bind(this));
  }

  // TODO: 추가 기능 구현
}

const gameController = new GameController();

module.exports = GameController;
