// Only change code below this line
function mathTest(x, y) {
  // Only change code above this line
  if (x < 0 || y < 0) {
    // Only change code below this line
    return undefined;
    // Only change code above this line
  } else {
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
    // Only change code below this line
  }
}
mathTest();
// Only change code above this line
module.exports = mathTest;
