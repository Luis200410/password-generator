const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordF = document.getElementById("passwordOne")
let passwordS = document.getElementById("passwordTwo")
let userLenght = document.getElementById("password-lenght")

function randomPassword() { 
    passwordF.textContent = ""
    passwordS.textContent = ""
    userLenght = userLenght.value
    for (randomF = 0;  randomF < userLenght; randomF++){
        let randomF = Math.floor(Math.random() * characters.length)
        passwordF.value += characters[randomF]
    
        let randomS = Math.floor(Math.random() * characters.length)
        passwordS.value += characters[randomS]
    }
}

function togglePassword(){
    if (passwordF.type === "password" && passwordS.type === "password"){
            passwordF.type = "text"
            passwordS.type = "text"
            hide.textContent = "Hide"
        }else {
            passwordF.type = "password"
            passwordS.type = "password"
            hide.textContent = "Show"
        }
}

function copyPasswordF(){
    passwordF.select()
    navigator.clipboard.writeText(passwordF.value)
    console.log(passwordF)
}

function copyPasswordS(){
    passwordS.select()
    navigator.clipboard.writeText(passwordS.value)
}
