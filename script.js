let hexaArray =[0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
let colorParts=[]
for(let i=0; i < 6 ; i++){
    colorParts.push(hexaArray[Math.floor(Math.random() * hexaArray.length)])
}
let finalColor = `#${colorParts.join("")}`

let secondArray = [9 , "A" , "B" , "C" ,"D" ,"E" ,"F"]
let secondParts=[]
for(let i=0; i<6 ; i++){
    secondParts.push(secondArray[Math.floor(Math.random() * secondArray.length)])
}
let secondColor = `#${secondParts.join("")}`
document.body.style.backgroundImage =  "linear-gradient(to right, "+ finalColor+", "+ secondColor +")";
let button = document.querySelector("button")
button.style.backgroundImage =  "linear-gradient(to right, "+ finalColor+", "+ secondColor +")";