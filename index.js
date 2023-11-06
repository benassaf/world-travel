let buttonVal = 0
let images = ['Jamaica','Costa Rica','Cancun','Bahamas','Miami Beach','Puerto Rico','Las Vegas','Malibu','Puerto Vallarta','Dominican Republic','Cabos','Mexico City']
let  cardPosition = 3
let picOrd 
let butOrd
function startM(){
    console.log("button clicked")
    
    document.getElementById("question").textContent = "Oh yeah! I remember, this was in..."
    
    if(window.innerWidth>=500)
    document.getElementById("pText").innerHTML = `Travel has a unique way of etching memories into our hearts and minds, making them more vivid and enduring. It's in the unfamiliar landscapes, the chance encounters, and the shared experiences that we create the most treasured moments. These memories become the souvenirs of our journeys, reminding us of the world's vast beauty and the connections we've forged along the way, long after we've returned home. Travel is not just about the destinations but also about collecting a tapestry of memories that we can carry with us throughout our lives.`
    else
    document.getElementById("pText").innerHTML = `The best things in life are the people we love, the places we've been, and the memories we've made along the way.`
    pickImg()
    swtichButtons()
    document.getElementById("siOno").style.display = "none"   
    
}

function swtichButtons(){
    document.getElementById("but").style.display = "none"   
    document.getElementById("but0").style.display = "block"   
    document.getElementById("but1").style.display = "block"   
    document.getElementById("but2").style.display = "block"   

}

function pickImg(){
    cardPosition = (Math.floor(Math.random() * 3))
    picOrd = pickThreeRandomNum(12)
    butOrd = pickThreeRandomNum(3)
    console.log(picOrd)
    console.log(butOrd)

    document.getElementById("pImg").innerHTML =   `<img src="img/${images[picOrd[0]]}.jpg">`
    
    document.getElementById(`but${butOrd[0]}`).textContent = images[picOrd[0]]
    document.getElementById(`but${butOrd[1]}`).textContent = images[picOrd[1]]
    document.getElementById(`but${butOrd[2]}`).textContent = images[picOrd[2]]
}


function answer(sel){
    console.log(sel)
    console.log(butOrd[0])
    if (sel===butOrd[0]){
   right()}
   else {wrong(sel)}
}



function right(){
    document.getElementById("question").textContent = "That's Right!"
    document.body.style.backgroundColor = '#659DBD'
    document.body.style.backgroundColor = '#F7CAC9' //'#FDDCE2'  // change background color to rose
  /*  while(x=0,x<3,x++){
    document.getElementById(`but${butOrd[x]}`).style.backgroundColor = '#ffe54c'
    }*/
    document.getElementById("siOno").textContent = `GOOD JOB! ${images[picOrd[0]]} is the correct answer`
    document.getElementById("siOno").style.display = "block" 
   
}

function wrong(x){
    console.log(x)
    document.getElementById("question").textContent = "Try Again!"
    document.body.style.backgroundColor = '#EC71A1'//'#8b3a4a'

    document.getElementById("siOno").textContent = `mmmmh! ${images[picOrd[0]]} is not correct`
    document.getElementById("siOno").style.display = "block" 


}

function pickThreeRandomNum(max) {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Math.floor(Math.random() * max);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
