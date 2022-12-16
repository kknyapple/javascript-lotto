const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  printPurchase(callback) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      callback(money);
    });
  },

  printEnterLottoNumber(callback) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (number) => {
      callback(number);
    });
  },

  printEnterBonusNumber(callback) {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (number) => {
        callback(number);
      }
    );
  },
};

module.exports = InputView;
