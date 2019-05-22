module.exports = (a, b) => {
  if (isNaN(a) || isNaN(b)){ 
    console.warn('arguments given are in not numeric format');
    return;
  }
  return a + b;
}
