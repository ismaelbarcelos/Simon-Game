 
 
let pcArray = []
let playerArray = []
 
 
 let green = new Audio('sounds/green.mp3')
 let blue = new Audio('sounds/blue.mp3')
 let red = new Audio('sounds/red.mp3')
 let yellow = new Audio('sounds/yellow.mp3')
 let wrong = new Audio('sounds/wrong.mp3')

 let sequencia = document.getElementById('sequencia')
 let seqjogador = document.getElementById('seqjogador')
 let leveltitle = document.getElementById('level-title')
 let mostrarRecorde = document.getElementById('recorde')
 

 let btngreen = document.getElementById('green');
 let btnblue = document.getElementById('blue');
 let btnred = document.getElementById('red');
 let btnyellow = document.getElementById('yellow');

 let start = document.getElementById('level-title');

let numeroAleatorio =Math.floor( Math.random()*4);

function ramdom(){
  numeroAleatorio =Math.floor( Math.random()*4)
}



start.addEventListener('click',comecar) 


    btngreen.addEventListener('click',btn0)
  
    btnblue.addEventListener('click',btn1)
    btnred.addEventListener('click',btn2)
    btnyellow.addEventListener('click',btn3)

 //sequencia dos sons

let indice;
let recorde=0;

function error(){
  wrong.play()
}


function btn0(){
  green.play()
 
   btngreen.classList.add("pressed");

  setTimeout(() => {
    btngreen.classList.remove("pressed");
  }, 300);


 playerArray.push(0)
 console.log("player "+playerArray)

 indice = playerArray.length -1 

   if(pcArray[indice]=== playerArray[indice]){

     seqjogador.innerHTML =  playerArray.length 
 
if(pcArray.length===playerArray.length){
   setTimeout(() => {


    Pcplay2()
 
 
   }, 500);
}
 
    
 
 
 }else {
  
error()
  resetar()

}


}
function btn1(){
 blue.play()

   btnblue.classList.add("pressed");

  setTimeout(() => {
    btnblue.classList.remove("pressed");
  }, 300);

 playerArray.push(1)
 console.log("player "+playerArray)

 indice = playerArray.length -1 

   if(pcArray[indice]=== playerArray[indice]){

      seqjogador.innerHTML =  playerArray.length 
      recorde = playerArray.length
 
if(pcArray.length===playerArray.length){
   setTimeout(() => {


    Pcplay2()
 
 
   }, 500);
}
    

 
 }else {
  error()
  resetar()
  
 }





}
function btn2(){
  red.play()

    btnred.classList.add("pressed");

  setTimeout(() => {
    btnred.classList.remove("pressed");
  }, 300);

  playerArray.push(2)
  console.log("player "+playerArray)

indice = playerArray.length -1 

   if(pcArray[indice]=== playerArray[indice]){

    seqjogador.innerHTML =  playerArray.length
     recorde = playerArray.length 
 
if(pcArray.length===playerArray.length){
   setTimeout(() => {


    Pcplay2()
    
 
 
   }, 500);
}
 

 
 }else {
 error()
  resetar()
  
 }



}
function btn3(){
  yellow.play()

    btnyellow.classList.add("pressed");

  setTimeout(() => {
    btnyellow.classList.remove("pressed");
  }, 300);

  playerArray.push(3)
 console.log("player "+playerArray)

indice = playerArray.length -1 

   if(pcArray[indice]=== playerArray[indice]){

    seqjogador.innerHTML =  playerArray.length 
     recorde = playerArray.length
 
if(pcArray.length===playerArray.length){
   setTimeout(() => {


    Pcplay2()
 
 
   }, 500);
}
 
    
 
 
 }else {
 error()
  resetar()
 }



}
 
let Cores = ["green","red","blue","yellow"]

let cores = [
  new Audio('sounds/green.mp3'),
  new Audio('sounds/blue.mp3'),
  new Audio('sounds/red.mp3'),
  new Audio('sounds/yellow.mp3')
];

function Pcplay(){

  ramdom()
  pcArray.push(numeroAleatorio)
  
 

   setTimeout(() => {
    cores[numeroAleatorio].play()
  }, 700);

  
 }


function piscar(numeroAleatorio){ 

 if(numeroAleatorio==0){
   


      btngreen.classList.add("pressed");

  setTimeout(() => {
    btngreen.classList.remove("pressed");
  }, 400);

   
  }else if(numeroAleatorio==1){
   


      btnblue.classList.add("pressed");

  setTimeout(() => {
    btnblue.classList.remove("pressed");
  }, 400);

   
  }else if(numeroAleatorio==2){
    

      btnred.classList.add("pressed");

  setTimeout(() => {
    btnred.classList.remove("pressed");
  }, 400);

    
  }else if(numeroAleatorio == 3){
   

      btnyellow.classList.add("pressed");

  setTimeout(() => {
    btnyellow.classList.remove("pressed");
  }, 400);

    
  }




}


 //mostrarRecorde.innerHTML = "Seu recorde é ⚡: " +recorde 


function Pcplay2(){
 
 
 
for(let i = 0 ; i<pcArray.length ;i++){
   
 setTimeout(() => {

cores[pcArray[i]].play()
   piscar(pcArray[i])

    
 

  
 
 console.log("pc array "+pcArray)
   },i * 1000);

  
}
    sequencia.innerHTML = pcArray.length + 1
    seqjogador.innerHTML = 0
    mostrarRecorde.innerHTML = "Seu recorde ⚡ é : " +recorde 
  
   setTimeout(() => {


Pcplay()
 piscar(numeroAleatorio)
 
   },pcArray.length *1000);

 playerArray =[]

}



function comecar(){

   pcArray=[]
    playerArray=[]
    sequencia.innerHTML = 0
    seqjogador.innerHTML = 0
    
 

  setTimeout(() => {


Pcplay()
 piscar(numeroAleatorio)

  leveltitle.innerHTML = "Simon Game"

  sequencia.innerHTML = pcArray.length
   },1000);

}
 


  
    
 
 //fim 
 

 



  
  function resetar(){
   pcArray=[]
    playerArray=[]
   leveltitle.innerHTML = "voce errou! 😔 Clique em iniciar para jogar"
  }
























 