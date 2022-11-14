const MissionUtils = require("@woowacourse/mission-utils");

const UserLottos = require("./UserLottos");
const Lotto = require("./Lotto");

class LottoGame {
  isNumber(number) {
    return !isNaN(number);
  }

  isThousandUnit(number) {
    if (this.isNumber(number)) {
      return !!(number % 1000 === 0);
    }
  }

  validatePurchaseLotto(number) {
    if (!this.isThousandUnit(number)) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위여야 합니다.");
    }
  }

  printTheNumberOfLotto(lottos, number) {
    lottos.setTheNumberOfLotto(number / 1000);
    MissionUtils.Console.print(
      `${lottos.getTheNumberOfLotto()}개를 구매했습니다.`
    );
  }

  createLotto(lottos) {
    lottos.setLottos();
    lottos.getLottos().forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  compareNumber(lottos, wonLotto, bonusNumber) {
    lottos.setMatchingNumber();

    wonLotto.forEach((number) => {
      lottos.getLottos().forEach((lotto, index) => {
        lotto.getNumbers().includes(number) && lottos.matchingNumber[index]++;
      });
    });

    lottos.matchingNumber.forEach((number, index) => {
      if (number === 5) {
        if (lottos.lottos[index].numbers.includes(Number(bonusNumber))) {
          lottos.matchingNumber[index] = "5+1";
        }
      }
    });
  }

  printWinningResult(result) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[3] || 0}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[4] || 0}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[5] || 0}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["5+1"] || 0}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${result[6] || 0}개`
    );
  }

  printProfitRate(money, result) {
    const profit =
      (result[3] || 0) * 5000 +
      (result[4] || 0) * 50000 +
      (result[5] || 0) * 1500000 +
      (result["5+1"] || 0) * 30000000 +
      (result[6] || 0) * 2000000000;
    const profitRate = (profit * 100) / money;

    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  printResult(lottos, money) {
    const result = {};
    lottos.matchingNumber.forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });

    this.printWinningResult(result);
    this.printProfitRate(money, result);

    MissionUtils.Console.close();
  }

  receiveLottoNumbers(lottos, money) {
    MissionUtils.Console.readLine("당첨번호를 입력해 주세요.\n", (number) => {
      MissionUtils.Console.readLine(
        "보너스 번호를 입력해 주세요.\n",
        (bonusNumber) => {
          const winningLotto = new Lotto(
            number.split(",").map(Number),
            bonusNumber
          );
          const winningLottoNumber = winningLotto.getNumbers();
          const winningLottoBonusNumber = winningLotto.getBonusNumber();

          this.compareNumber(
            lottos,
            winningLottoNumber,
            winningLottoBonusNumber
          );

          this.printResult(lottos, money);
        }
      );
    });
  }

  game() {
    const lottos = new UserLottos();

    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validatePurchaseLotto(money);

      this.printTheNumberOfLotto(lottos, money);

      this.createLotto(lottos);

      this.receiveLottoNumbers(lottos, money);
    });
  }
}

module.exports = LottoGame;
