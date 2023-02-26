function changeCard(){
  var a = document.getElementById("card-number").value;
  document.querySelector(".img-card-no").innerHTML = a;

}
function changeName(){
var b = document.getElementById("name").value;
document.querySelector(".img-card-name").innerHTML = b;



}
function changeMonth(){
var c = document.getElementById("month").value;
document.querySelector(".img-card-month").innerHTML = c;


}
function changeYear(){
  var d = document.getElementById("year").value;
  document.querySelector(".img-card-year").innerHTML = d;

}
function changeCvc(){

var e = document.getElementById("cvc").value;
document.querySelector(".img-card-cvc").innerHTML = e;


}



function myfun(){
let isCorrectName = true;
 let isCorrectCardNo = true;
 let isCorrectMonth = true;
 let isCorrectYear = true;
let name = document.getElementById("name").value
if(name.length === 0){
  isCorrectName = false;
}



let cardNumber = document.getElementById("card-number").value;
if(cardNumber.length === 19){
   if(cardNumber[4] === ' ' && cardNumber[9] === ' ' && cardNumber[14] == ' '){
     for(var i = 0; i< cardNumber.length ;i++){
       if(i === 9 || i===4 || i===14){

       }else{
        if(cardNumber[i] === '0' || cardNumber[i] === '1' || cardNumber[i] === '2' || cardNumber[i] === '3' || cardNumber[i] === '4' || cardNumber[i] === '5' || cardNumber[i] === '6' || cardNumber[i] === '7' || cardNumber[i] === '8' || cardNumber[i] === '9'){
          isCorrectCardNo = true;
        }else{
          isCorrectCardNo = false;
          break;
        }
       }
     }
   }else{
     isCorrectCardNo = false;
   }
}else{
  isCorrectCardNo = false;
}



console.log(isCorrectCardNo);
console.log(isCorrectName);

let month = document.getElementById("month").value;
if(month.length === 2){
  if(month[0] == '0'){
    if(month[1] === '1' || month[1] === '2' || month[1] === '3' || month[1] === '4' || month[1] === '5' || month[1] === '6' || month[1] === '7' || month[1] === '8' || month[1] === '9'){
      isCorrectMonth = true;
    }else{
      isCorrectMonth = false;
    }
  }else if (month[0] === '1'){
    if(month[1] === '1' || month[1] === '2' ){
      isCorrectMonth = true;
    }else{
      isCorrectMonth = false;
    }
  }
}else{
  isCorrectMonth = false;
}

let year = document.getElementById("year").value;
if(year.length === 2){
  if(year[0] == '0' || year[0] == '1' || year[0] === '2' || year[0] === '3' || year[0] === '4' || year[0] === '5' || year[0] === '6' || year[0] === '7' || year[0] === '8' || year[0] === '9'){
    if(year[1] === '0' || year[1] === '1' || year[1] === '2' || year[1] === '3' || year[1] === '4' || year[1] === '5' || year[1] === '6' || year[1] === '7' || year[1] === '8' || year[1] === '9'){
    isCorrectYear = true;
    }else{
    isCorrectYear = false;
    }
  }else{
  isCorrectYear = false;
  }
}else{
  isCorrectYear = false;
}
let isCorrectCvc = true;
let cvc  = document.getElementById("cvc").value;
if(cvc.length === 0){
  isCorrectCvc = false;
}
if(isCorrectName === false){



  document.getElementById("name").style.borderColor = "hsl(0, 100%, 66%)";
  document.querySelector(".small-name").style.display = "block";
  setTimeout(function(){
    document.getElementById("name").style.borderColor = "black";
    document.querySelector(".small-name").style.display = "none";
  },3000)


}
if(isCorrectCardNo === false){
    document.getElementById("card-number").style.borderColor = "hsl(0, 100%, 66%)";
      document.querySelector(".small-card").style.display = "block";
      setTimeout(function(){
        document.getElementById("card-number").style.borderColor = "black";
        document.querySelector(".small-card").style.display = "none";
      },3000)
}
if(isCorrectMonth === false){
    document.getElementById("month").style.borderColor = "hsl(0, 100%, 66%)";
      document.querySelector(".small-date").style.display = "block";
      setTimeout(function(){
        document.getElementById("month").style.borderColor = "black";
        document.querySelector(".small-date").style.display = "none";
      },3000)
}
if(isCorrectYear === false){
    document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
      document.querySelector(".small-date").style.display = "block";
      setTimeout(function(){
        document.getElementById("year").style.borderColor = "black";
        document.querySelector(".small-date").style.display = "none";
      },3000)
}
if(isCorrectCvc === false){
    document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
      document.querySelector(".small-cvc").style.display = "block";
      setTimeout(function(){
        document.getElementById("cvc").style.borderColor = "black";
        document.querySelector(".small-cvc").style.display = "none";
      },3000)
}
if(isCorrectCardNo === true && isCorrectName === true && isCorrectMonth=== true && isCorrectYear === true && isCorrectCvc === true){
  document.querySelector(".form-element").style.display = "none";
  document.querySelector(".thank-you").style.display = "block";
}


}
