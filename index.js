const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoNumbs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = document.getElementById("length-el")
let wantNumbs = document.getElementById("numbs")
let wantSymbols = document.getElementById("symbols")

function createPassword() {
    let charactersSize = characters.length
    let length = parseInt(passwordLength.value)
    let password = ""
    console.log(wantSymbols.checked)
    console.log(wantNumbs.checked)
    if(wantSymbols.checked==false && wantNumbs.checked==true) {
        for(let i = 0; i < length; i++) {
            password += charactersNoNumbs[Math.floor(Math.random()*charactersNoNumbs.length)]
        }
    }
    else {
        if(wantSymbols.checked) charactersSize -= symbols.length
        if(wantNumbs.checked) charactersSize -= 10
        for(let i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random()*charactersSize)]
        }
    }
    return password
}

function generate() {
    document.getElementById("pass-1").textContent = createPassword()
    document.getElementById("pass-2").textContent = createPassword()
}

function copyPass1() {
    let password = document.getElementById("pass-1").textContent
    navigator.clipboard.writeText(password)
}

function copyPass2() {
    let password = document.getElementById("pass-2").textContent
    navigator.clipboard.writeText(password)
}