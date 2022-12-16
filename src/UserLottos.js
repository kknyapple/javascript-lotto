const MissionUtils = require("@woowacourse/mission-utils");

const UserLotto = require("./UserLotto");

class UserLottos {
  constructor() {
    this.lottos = [];
    this.matchingNumber = [];
  }

  generateNumber() {
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    return numbers;
  }

  setLottos(theNumberOfLotto) {
    for (let i = 0; i < theNumberOfLotto; i++) {
      this.lottos.push(new UserLotto(this.generateNumber()));
    }
  }

  getLottos() {
    return this.lottos;
  }

  setMatchingNumber(theNumberOfLotto) {
    for (let i = 0; i < theNumberOfLotto; i++) {
      this.matchingNumber[i] = 0;
    }
  }

  getMatchingNumber() {
    return this.matchingNumber;
  }
}
module.exports = UserLottos;
