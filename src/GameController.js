const MissionUtils = require("@woowacourse/mission-utils");

const InputView = require("./InputView");
const OutputView = require("./OutputView");
const UserLotto = require("./UserLottos");
const Lotto = require("./Lotto");
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
    OutputView.printTheNumberOfLottos(money);

    this.makeLottos(money);
  }

  validateLottoNumber(number) {
    if (!this.isNumber(number)) {
      throw new Error("[ERROR] 숫자 아님.");
    }
    if (!(number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 1-45");
    }
  }

  receiveLottoNumber(numbers) {
    const winningLotto = new Lotto(numbers.split(",").map(Number));
    numbers.split(",").forEach((numbers) => {
      this.validateLottoNumber(numbers);
    });

    console.log(winningLotto.getNumbers());

    InputView.printEnterBonusNumber(this.receiveBonusNumber.bind(this));
  }

  receiveBonusNumber(number) {}

  makeLottos(money) {
    const lottos = new UserLotto();

    lottos.setLottos(money / 1000);
    lottos.getLottos().forEach((lotto) => {
      OutputView.printLottos(lotto);
    });

    InputView.printEnterLottoNumber(this.receiveLottoNumber.bind(this));
  }

  game() {
    InputView.printPurchase(this.purchase.bind(this));
  }

  // TODO: 추가 기능 구현
}

const gameController = new GameController();

module.exports = GameController;
