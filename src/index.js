module.exports = function check(str, config) {
  let stack = [];
  let openingBrackets = [];
  let closingBrackets = [];
  for(let i = 0; i < config.length; i++) {
    for(let j = 0; j < config[i].length; j++) {
      if (j === 0) {
        openingBrackets.push(config[i][j]);
      } else if (j%2 === 0) {
        openingBrackets.push(config[i][j]);
      } else if (j%2 !== 0) {
        closingBrackets.push(config[i][j]);
      }
    }
  }
  for (let i = 0; i < str.length; i++) {
    let checkedSymb = str[i];
    if (str.length%2 !== 0) {
      return false;
    }
    if (openingBrackets.includes(checkedSymb)) {
      stack.push(checkedSymb);
    }
    let lastSymb = stack[stack.length-1];
    if (openingBrackets.indexOf(checkedSymb) === closingBrackets.indexOf(lastSymb)) {
      stack.pop(checkedSymb);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
