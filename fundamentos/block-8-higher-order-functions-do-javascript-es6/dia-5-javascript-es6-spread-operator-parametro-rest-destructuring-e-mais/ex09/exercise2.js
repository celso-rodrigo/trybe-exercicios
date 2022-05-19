function sum(...num) {
  return num.reduce((total, nums) => total + nums, 0);
}

console.log(sum(1, 2));
console.log(sum(10, 12));
console.log(sum(2, -2, 2));
console.log(sum(1, 1, 1, 1, 1, -5));
