const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  printPurchase(callback) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      callback(money);
    });
  },
};

module.exports = InputView;
