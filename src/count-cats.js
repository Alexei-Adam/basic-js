const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if(backyard.length === 0) return 0;
  let arr = backyard[0];
  for(let i; i < backyard.length;i++){
    arr = arr.concat(backyard[i]);
  }
  let count = 0;
  for(let a=0;a<arr.length;a++){
    if(arr[a] === '^^') count++;
  }
  return count;
};
