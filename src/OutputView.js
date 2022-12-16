const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printLottos(money) {
    MissionUtils.Console.print(`\n${money / 1000}개를 구매했습니다.`);
  },
};

module.exports = OutputView;
