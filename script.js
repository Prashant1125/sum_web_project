function addition(){
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let sum = 0 ;
   if(num1 < num2){
  for(let i = num1 ; i <= num2 ; i++){
  sum+=i;
  }
}
else{
    for(let i =num1 ; i >= num2 ; i++){
    sum+=i;
      }
  }
  let res = document.getElementById("res");
  res.innerHTML = sum ;
}