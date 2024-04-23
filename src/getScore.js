const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  
  function objCalc(obj) {
    let total = 0;
    for (let key in scores) {
      total = total + obj[key];
    }
    return total;
  }
  
  console.log(objCalc(scores));

  // reduce method
  
function getScore2(scores) {
  return Object.values(scores2).reduce((total, score) => total + score, 0);
}

 
const scores2 = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};

console.log(getScore2(scores2));