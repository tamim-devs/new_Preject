
let heading1 = document.querySelector(".heading1")
let heading2 = document.querySelector(".heading2")

let playerOne = document.querySelector(".player__one") 
let playerTwo = document.querySelector(".player__two")

let inputBox1 = document.querySelector(".input__box1")
let inputBox2 = document.querySelector(".input__box2")

let error1 = document.querySelector(".Error1")
let error2 = document.querySelector(".Error2")

let btn1 = document.querySelector(".player1__btn")
let btn2 = document.querySelector(".player2__btn")
let restartBtn = document.querySelector(".restart__btn")


btn1.addEventListener("click", function(){
  if (Boolean(inputBox1.value)) {

    if (Boolean(inputBox1.value -5)) {
      
      if (Boolean(inputBox1.value >=0 && inputBox1.value <= 10)) {
        playerOne.style.display = "none"
        playerTwo.style.display = "block"
        
        restartBtn.style.display = "none"
        
      }else{
        error1.innerHTML = "vai 0 theka 10 er modday diyen"
      }

    }else{
      error1.innerHTML = "vai text diyen na number diyen"
    }
    
  }else{
    error1.innerHTML = "vai khali raikha jayen na"
  }
})

btn2.addEventListener("click", function(){
  if (Boolean(inputBox2.value)) {
    if (Boolean(inputBox2.value -5)) {

      if (Boolean(inputBox2.value >=0 && inputBox2.value <=10)) {
        if (inputBox1.value == inputBox2.value) {
          heading2.innerHTML = "2nd Player winner"
          inputBox2.style.display = "none"
          btn2.style.display = "none"
          restartBtn.style.display = "block"
        }else{
          heading2.innerHTML = " 1st Player Winner "
          inputBox2.style.display = "none"
          btn2.style.display = "none"
          restartBtn.style.display = "block"
        }


      }else{
        error2.innerHTML = "Oi miya 0 theka 10 er modday den naholay apni fel"
      }
      
    }else{
      error2.innerHTML = "Vai number  den"
    }
    


  }else{
    error2.innerHTML = "vai khali raikha jayen na"
  }
})

restartBtn.addEventListener("click", function(){
  location.reload()
})