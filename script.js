var wrapperEle =document.body.querySelector(".wrapper");
var headOneEle =document.body.querySelector(".headOne");
var headTwoEle =document.body.querySelector(".headTwo");
var headThreeEle =document.body.querySelector(".headThree");
var buttonEle =document.body.querySelector(".infoButton");
var yearlyCost =calculation();
var yearly12 =yearlyCost*12;
var yearly17 =yearlyCost*17;
var yearly26 =yearlyCost*26;
var yearly29 =yearlyCost*29;


function gatherInformation(){
   var inputMiles = prompt("What is the average amount of miles per year?");
  var inputCost = Number(prompt("What is the cost per gallon?"));
  writerFunction(inputMiles,inputCost);
  calculation(inputMiles,inputCost);
}

function calculation(miles,cost){
 miles*cost;
  
}

function mpgRating(yearlyCost){
  
}


function writerFunction(miles,cost,yearlyCost){
  headOneEle.innerHTML="Miles: "+miles;
  headTwoEle.innerHTML="Cost: "+cost;
  headThreeEle.innerHTML="Yearly Cost: "+yearlyCost;
}
  

buttonEle.addEventListener("click", function(){
  gatherInformation();
  })
