const MissionUtils = require("@woowacourse/mission-utils");

const { MATCHES } = require("./constant");

const OutputView = {
  printTheNumberOfLottos(money) {
    MissionUtils.Console.print(`\n${money / 1000}개를 구매했습니다.`);
  },

  printLottos(lotto) {
    MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
  },

  printWinningResult(result) {
    MissionUtils.Console.print(`${MATCHES.THREE.TEXT} - ${result[3] || 0}개`);
    MissionUtils.Console.print(`${MATCHES.FOUR.TEXT} - ${result[4] || 0}개`);
    MissionUtils.Console.print(`${MATCHES.FIVE.TEXT} - ${result[5] || 0}개`);
    MissionUtils.Console.print(
      `${MATCHES.FIVE_WITH_BONUS.TEXT} - ${result["5+1"] || 0}개`
    );
    MissionUtils.Console.print(`${MATCHES.SIX.TEXT} - ${result[6] || 0}개`);
  },

  printProfitRate(money, result) {
    const profit =
      (result[3] || 0) * MATCHES.THREE.PRICE +
      (result[4] || 0) * MATCHES.FOUR.PRICE +
      (result[5] || 0) * MATCHES.FIVE.PRICE +
      (result["5+1"] || 0) * MATCHES.FIVE_WITH_BONUS.PRICE +
      (result[6] || 0) * MATCHES.SIX.PRICE;
    const profitRate = (profit * 100) / money;

    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  },

  printResult(lottos, money) {
    const result = {};
    lottos.matchingNumber.forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });

    this.printWinningResult(result);
    this.printProfitRate(money, result);

    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
