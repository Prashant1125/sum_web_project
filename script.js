function addition(){
  let num1 = document.getElementById("a");
  let num2 = document.getElementById("b");
  let sum = 0 ;
  for(let i = parseInt(num1.value) ; i <= parseInt(num2.value) ; i++){
    sum += i ;
  }
  let res = document.getElementById("res");
  res.innerHTML = sum ;
}