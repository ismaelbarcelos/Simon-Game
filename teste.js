function Pcplay(){
  ramdom()
  if(numeroAleatorio==0){
    green.play()


      btngreen.classList.add("pressed");

  setTimeout(() => {
    btngreen.classList.remove("pressed");
  }, 200);

    pcArray.push(0)
      console.log("pc "+pcArray)
  }else if(numeroAleatorio==1){
    blue.play()


      btnblue.classList.add("pressed");

  setTimeout(() => {
    btnblue.classList.remove("pressed");
  }, 200);

    pcArray.push(1)
      console.log("pc "+pcArray)
  }else if(numeroAleatorio==2){
    red.play()

      btnred.classList.add("pressed");

  setTimeout(() => {
    btnred.classList.remove("pressed");
  }, 200);

    pcArray.push(2)
      console.log("pc "+pcArray)
  }else if(numeroAleatorio == 3){
    yellow.play()

      btnyellow.classList.add("pressed");

  setTimeout(() => {
    btnyellow.classList.remove("pressed");
  }, 200);

    pcArray.push(3)
      console.log("pc "+pcArray)
  }

 
}