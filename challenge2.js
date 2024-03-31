/* The function below creates an array depending on the numbers
given as input. It prints the numbers between  the given numbers
and also includes the numbers given*/
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