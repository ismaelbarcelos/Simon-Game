 
 
let pcArray = []
let playerArray = []

let recorde =localStorage.getItem("recorde")||0;




 
 
 let green = new Audio('sounds/green.mp3')
 let blue = new Audio('sounds/blue.mp3')
 let red = new Audio('sounds/red.mp3')
 let yellow = new Audio('sounds/yellow.mp3')
 let wrong = new Audio('sounds/wrong.mp3')

 let sequencia = document.getElementById('sequencia')
 let seqjogador = document.getElementById('seqjogador')
 let leveltitle = document.getElementById('level-title')
 let vez = document.getElementById('vez')
 let mostrarRecorde = document.getElementById('recorde')
 
 mostrarRecorde.innerHTML = "Seu recorde ⚡ é : " + recorde 

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
let estado;

 //if(estado ==="pc "){
 // vez.innerHTML = "olhe a sequencia"
//}else if(estado ==="jogador"){
 // vez.innerHTML = "Sua vez"
//}


let indice;

let Suasequencia;


function btn0(){

  if(estado ==="jogador"){

  green.play()
 
   btngreen.classList.add("pressed");

  setTimeout(() => {
    btngreen.classList.remove("pressed");
  }, 300);


 playerArray.push(0)


 indice = playerArray.length -1 

   if(pcArray[indice]=== playerArray[indice]){
  seqjogador.innerHTML =  playerArray.length 
 
if(pcArray.length===playerArray.length){

    
 Suasequencia = playerArray.length

 

 if(recorde>Suasequencia){
  recorde = recorde
   localStorage.setItem("recorde", recorde)
}else{
  recorde = Suasequencia
   localStorage.setItem("recorde", recorde)
}


 estado = "pc"
 

   setTimeout(() => {
 vez.innerHTML = "olhe a sequência"

    Pcplay2()
 
 
   }, 500);
}
  
    
 
 
 }else {
  
error()


}

 }
 }
 // fim da função


function btn1(){

  if(estado ==="jogador"){

  

 blue.play()

   btnblue.classList.add("pressed");

  setTimeout(() => {
    btnblue.classList.remove("pressed");
  }, 300);

 playerArray.push(1)


 indice = playerArray.length -1 

   if(pcArray[indice]=== playerArray[indice]){

      seqjogador.innerHTML =  playerArray.length 
 
if(pcArray.length===playerArray.length){

      Suasequencia = playerArray.length
     

      if(recorde>Suasequencia){
  recorde = recorde
   localStorage.setItem("recorde", recorde)
}else{
   recorde = Suasequencia
    localStorage.setItem("recorde", recorde)
}


      estado = "pc"
      

   setTimeout(() => {

 vez.innerHTML = "olhe a sequência"
    Pcplay2()
 
 
   }, 500);
}
 
 }else {
  error()
 
  
 }

}
 }
 // fim da função 


function btn2(){

if(estado ==="jogador"){

 

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
 
if(pcArray.length===playerArray.length){
 
    Suasequencia = playerArray.length 
   

    if(recorde>Suasequencia){
  recorde = recorde
   localStorage.setItem("recorde", recorde)
}else{
   recorde = Suasequencia
    localStorage.setItem("recorde", recorde)
}


     estado = "pc"
     

   setTimeout(() => {
 vez.innerHTML = "olhe a sequência"

    Pcplay2()
    
 
 
   }, 500);
}
 

 
 }else {
 error()
  
  
 }
}
 }
 // fim da função 

function btn3(){

  if(estado ==="jogador"){
console.log(estado)
 

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
 
if(pcArray.length===playerArray.length){
 
    Suasequencia = playerArray.length
    

    if(recorde>Suasequencia){

  recorde = recorde
   localStorage.setItem("recorde", recorde)
}else{
  recorde = Suasequencia
   localStorage.setItem("recorde", recorde)
}


     estado = "pc"
     

   setTimeout(() => {


    Pcplay2()
  vez.innerHTML = "olhe a sequência"
 
   }, 500);
}
 
    
 
 
 }else {
 error()
  
 }
}
 }
// fim da função

 
 
let Cores = ["green","red","blue","yellow"]

let cores = [
  new Audio('sounds/green.mp3'),
  new Audio('sounds/blue.mp3'),
  new Audio('sounds/red.mp3'),
  new Audio('sounds/yellow.mp3')
];

// função de computador escolherr uma cor aleatoria 

function Pcplay(){

  ramdom()
  pcArray.push(numeroAleatorio)

 // vez.innerHTML = "Olhe sequência"
  
 

   setTimeout(() => {
    cores[numeroAleatorio].play()
     
  }, 700);
estado ="jogador"
console.log(estado)

setTimeout(() => {
   
     vez.innerHTML = "Sua vez"

  }, 800);
  
 }


function piscar(numeroAleatorio){ 

 if(numeroAleatorio==0){
   


      btngreen.classList.add("pressed");

  setTimeout(() => {
    btngreen.classList.remove("pressed");
  }, 200);

   
  }else if(numeroAleatorio==1){
   


      btnblue.classList.add("pressed");

  setTimeout(() => {
    btnblue.classList.remove("pressed");
  }, 200);

   
  }else if(numeroAleatorio==2){
    

      btnred.classList.add("pressed");

  setTimeout(() => {
    btnred.classList.remove("pressed");
  }, 200);

    
  }else if(numeroAleatorio == 3){
   

      btnyellow.classList.add("pressed");

  setTimeout(() => {
    btnyellow.classList.remove("pressed");
  }, 200);

    
  }




}





function Pcplay2(){
  
 if(estado === "pc"){
 
 
for(let i = 0 ; i<pcArray.length ;i++){
   
 setTimeout(() => {

cores[pcArray[i]].play()
   piscar(pcArray[i])

  
 

  
 
 console.log("pc array "+pcArray)
   },i * 1000);

  
}
    sequencia.innerHTML = pcArray.length +1
    seqjogador.innerHTML = 0
    mostrarRecorde.innerHTML = "Seu recorde ⚡ é : " + recorde
  
   setTimeout(() => {

Pcplay()
 piscar(numeroAleatorio)
 estado = "jogador" 
 console.log(estado)
   },pcArray.length *1000);

 playerArray =[]




}




}





function comecar(){
estado = "pc"
console.log(estado)
   pcArray=[]
    playerArray=[]
    sequencia.innerHTML = 0
    seqjogador.innerHTML = 0
    
 

  setTimeout(() => {

   

Pcplay()
 piscar(numeroAleatorio)

  leveltitle.innerHTML = "Simon Game"
  vez.innerHTML = ""

  sequencia.innerHTML = pcArray.length
  
   },1000);
 
}
 


  
    
 
 //fim 
 

 



  
  function error(){
   pcArray=[]
    playerArray=[]
   leveltitle.innerHTML = "voce errou! 😔 Clique em Start Game para jogar"
     wrong.play()
  }

  function resetar(){
    localStorage.removeItem("recorde")
    mostrarRecorde.innerHTML = "Seu recorde ⚡ é : 0" 
    comecar()
  }
