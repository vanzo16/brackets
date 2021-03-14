function bracketsFunction(brackets){
  let Num = 0;
  for( let i = 0; i < brackets.length; i++ ){
    if (brackets.charAt(i) == "(" ) {
      Num += 1;
    }else{
      Num -= 1;
    }
    if (Num < 0){
      return false
    }
  }
  if (Num === 0){
    return true
  }else {
    return false
  }
}

console.log(bracketsFunction("()))"));
