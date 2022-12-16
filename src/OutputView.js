const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printTheNumberOfLottos(money) {
    MissionUtils.Console.print(`\n${money / 1000}개를 구매했습니다.`);
  },
  printLottos(lotto) {
    MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
  },
};

module.exports = OutputView;
