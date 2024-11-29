const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el")

let length = 15

let randomNumber = Math.floor(Math.random() * characters.length)

function generatePassword() {
    let parola = ""
    passwordEl.textContent = parola
    for (let i = 0; i <= length;i ++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        parola += characters[randomNumber] 
    }
    passwordEl.textContent = parola
}

