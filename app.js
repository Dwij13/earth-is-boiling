var Kalvium=10
console.log(Kalvium)
var word ="Kalvium"
console.log(word)
//body
var bodyvar = document.body
//three buttons

var consumption = document.getElementById("consumption")
console.log("consumption:",consumption)
var climate = document.getElementById("climate")
console.log("climate:",climate)
var resources = document.getElementById("resources")
console.log("resources:",resources)
var people = document.getElementById("people")
console.log("people:",people)

//save text

var save=document.getElementById("save")
console.log("text:",save)

//iframe

var frame= document.getElementById("frame")
console.log("frame:",frame)

//variable

consumption.onclick=()=>{
  //background image
  bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
  bodyvar.style.backgroundSize="100% 100%"
  //frame
  frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
  save.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
  consumption.style.background="#36C664"
  climate.style.background="transparent"
  resources.style.background="transparent"
  people.style.background="transparent"
}

climate.onclick=()=>{
  bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
  frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
  save.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
  climate.style.background="#367EEB"
  resources.style.background="transparent"
  people.style.background="transparent"
  consumption.style.background="transparent"
}
resources.onclick=()=>{
  bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
  frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
  save.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
  resources.style.background="#DF973B"
  climate.style.background="transparent"
  people.style.background="transparent"
  consumption.style.background="transparent"
}
people.onclick=()=>{
  bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
  frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
  save.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
  people.style.background="#D84855"
  climate.style.background="transparent"
  consumption.style.background="transparent"
  resources.style.background="transparent"
}


