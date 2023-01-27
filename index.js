const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = document.getElementById("pass1")
let secondPassword = document.getElementById("pass2")
let passList =[]
let passLength = document.getElementById("length-el").addEventListener("change", function (e) { passLength = parseInt(this.value); })

function generatePasswords() {
    firstPassword.textContent = randomPassword()
    secondPassword.textContent = randomPassword()
}

function randomPassword() {
    let password = ''
    for (let i=0; i<passLength; i++) {
        let ind = Math.floor(Math.random()*characters.length)
        password+=characters[ind]
    }
    return password
}




