const ingredients = {
  // 甲烷
  methane: [
    getAirUpperAndLow(15, 4.9),
    getOxygenUpperAndLow(61,5)
  ],
  // 乙烷
  ethane: [
    getAirUpperAndLow(15, 3),
    getOxygenUpperAndLow(66, 3)
  ],
  // 丙烷
  propane: [
    getAirUpperAndLow(9.5, 2.1),
    getOxygenUpperAndLow(55, 2.3)
  ],
  // 丁烷
  butane: [
    getAirUpperAndLow(8.5, 1.5),
    getOxygenUpperAndLow(49, 1.8)
  ],
  // 乙烯
  ethylene: [
    getAirUpperAndLow(34, 2.75),
    getOxygenUpperAndLow(80, 3)
  ],
  // 乙炔
  acetylene: [
    getAirUpperAndLow(34, 1.53),
    getOxygenUpperAndLow(93, 2.8)
  ],
  // 氢气
  hydrogen: [
    getAirUpperAndLow(75, 4),
    getOxygenUpperAndLow(95, 4)
  ],
  // 氨气
  ammonia: [
    getAirUpperAndLow(28, 15),
    getOxygenUpperAndLow(79, 13.5)
  ],
  // 一氧化碳
  carbonMonoxide: [
    getAirUpperAndLow(74.5, 12),
    getOxygenUpperAndLow(94, 15.5)
  ],
  // 丙烯
  propylene: [
    getAirUpperAndLow(11, 2),
    getOxygenUpperAndLow(58, 2)
  ],
};
// 获取空气中的上下限
function getAirUpperAndLow(upper, low) {
  let airUpper = {
    PP: upper,
    O2: (100 - upper) * 0.209,
    N2: (100 - upper) * 0.791,
  };
  let airLow = {
    PP: low,
    O2: (100 - low) * 0.209,
    N2: (100 - low) * 0.791,
  };
  return { airUpper, airLow };
}
// 获取氧气上下限
function getOxygenUpperAndLow(upper, low) {
  let oxygenUpper = {
    PP: upper,
    O2: 100 - upper,
    N2: 0,
  };
  let oxygenLow = {
    PP: low,
    O2: 100 - low,
    N2: 0,
  };
  return { oxygenUpper, oxygenLow };
}



