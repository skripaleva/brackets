module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  bracketsConfig.forEach(item => brackets[item[0]] = item[1]);
  let stack = [];
  str.split('').forEach(item => {
    if (brackets[stack[stack.length - 1]] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });
  return !stack.length
};