const MINE_RATE = 40000;
const DIFFICULTY = 4;

const GEN0 = {
  timestamp: 1,
  lastHash: '-----',
  hash: 'hash-one',
  difficulty: DIFFICULTY,
  nonce: 0,
  data: []
};

const STARTING_BALANCE = 0;

const REWARD_INPUT = { address: '*I@my0urg0d*' };

const MINING_REWARD = 420;
module.exports = {
  GEN0,
  MINE_RATE,
  STARTING_BALANCE,
  REWARD_INPUT,
  MINING_REWARD,
 DIFFICULTY
   
};
