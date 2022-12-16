const MissionUtils = require("@woowacourse/mission-utils");

const InputView = require("./InputView");
const OutputView = require("./OutputView");
const UserLotto = require("./UserLottos");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");
const { ERROR } = require("./constant");

class GameController {
  constructor() {
    this.money;
    this.lottos;
    this.winningLotto;
    this.bonusNumber;
  }

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
    this.money = money;
    this.validate(money);
    OutputView.printTheNumberOfLottos(money);

    this.makeLottos();
  }

  validateLottoNumber(number) {
    if (!this.isNumber(number)) {
      throw new Error("[ERROR] 숫자 아님.");
    }
    if (!(number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 1-45");
    }
  }

  compare() {
    this.lottos.getLottos().forEach((lotto, index) => {
      this.winningLotto.getNumbers().forEach((number) => {
        lotto.getNumbers().includes(number) &&
          this.lottos.matchingNumber[index]++;
      });
    });

    this.lottos.getMatchingNumber().forEach((number, index) => {
      if (number === 5) {
        console.log(
          this.lottos
            .getLottos()
            [index].getNumbers()
            .includes(Number(this.bonusNumber))
        );

        if (
          this.lottos
            .getLottos()
            [index].getNumbers()
            .includes(Number(this.bonusNumber.getBonusNumber()))
        ) {
          this.lottos.matchingNumber[index] = "5+1";
        }
      }
    });

    console.log(this.lottos.getMatchingNumber());

    OutputView.printResult(this.lottos, this.money);
  }

  receiveLottoNumber(numbers) {
    this.winningLotto = new Lotto(numbers.split(",").map(Number));
    numbers.split(",").forEach((numbers) => {
      this.validateLottoNumber(numbers);
    });

    // console.log(this.winningLotto.getNumbers());

    InputView.printEnterBonusNumber(this.receiveBonusNumber.bind(this));
  }

  receiveBonusNumber(number) {
    this.bonusNumber = new BonusNumber(number);

    // console.log(this.bonusNumber.getBonusNumber());
    this.compare();
  }

  makeLottos() {
    this.lottos = new UserLotto();

    this.lottos.setLottos(this.money / 1000);
    this.lottos.setMatchingNumber(this.money / 1000);
    this.lottos.getLottos().forEach((lotto) => {
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
