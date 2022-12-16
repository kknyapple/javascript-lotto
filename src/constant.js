const ERROR = {
  LOTTO: {
    SIX_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATED: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  },
};

const MATCHES = {
  THREE: {
    PRICE: 5000,
    TEXT: `3개 일치 (5,000원)`,
  },
  FOUR: {
    PRICE: 50000,
    TEXT: `4개 일치 (50,000원)`,
  },
  FIVE: {
    PRICE: 1500000,
    TEXT: `5개 일치 (1,500,000원)`,
  },
  FIVE_WITH_BONUS: {
    PRICE: 30000000,
    TEXT: `5개 일치, 보너스 볼 일치 (30,000,000원)`,
  },
  SIX: {
    PRICE: 2000000000,
    TEXT: `6개 일치 (2,000,000,000원)`,
  },
};

const TEXT = {};

module.exports = {
  ERROR,
  TEXT,
  MATCHES,
};
