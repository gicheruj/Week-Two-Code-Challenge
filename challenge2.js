function arrayGenerator(x,y){
  let numbers = [x];
  let number = x;
    while (number < y){
      number ++;
      numbers.push(number);
    }
   console.log(numbers);
}
arrayGenerator(-4,5);