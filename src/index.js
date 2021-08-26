module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '['];
  const bracketCouples = {
    [')']: '(',
    ['}']: '{',
    [']']: '['
  };
  let result = [];
  for (let i = 0; i < str.length; i++){
    let strSymbol = str[i];
    if (openBrackets.includes(strSymbol)){
      result.push(strSymbol);
    } else{
      if (result.length===0){
        return false;
      }
      let lastElement = result[result.length-1];
      if (bracketCouples[strSymbol]===lastElement){
        result.pop();
      } else{
        return false;
      }
    }
  }
  return result.length===0; 
}
