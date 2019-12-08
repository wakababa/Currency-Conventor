//variables
const fb =document.getElementById('first') ;

const sc =document.getElementById('second') ;

//use converter function
let demo = () => {
let rate = fx(1).from(fb.value).to(sc.value)


 const value =document.getElementById('number').value;
 document.getElementById('sum').innerHTML ="<div id='wow'>"+ value+ " "+fb.value+  " => "+ Math.round(value*rate) + " "+sc.value +"</div>";
 
 
 // control for equal and less than 0 
 if(value<=0){
     alert('Please enter a vaild number');
     document.getElementById('sum').innerHTML="";
 }

}
  
  
// fetching to data from api 
fetch('https://api.exchangeratesapi.io/latest?base=USD')
  .then((resp) => resp.json())
  .then((data) => fx.rates = data.rates)

  // function  on click

  document.getElementById('btn').addEventListener('click',demo);
  
