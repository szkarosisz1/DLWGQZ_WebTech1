//Bejelentkezéshez szükséges változók
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#passwInput");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
let passwordInput = document.getElementById("passwInput");

//Validációhoz függvény
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "A név mező nem lehet üres";
        nameInput.classList.add("error-border");   
        errorFlag = true;     
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Érvénytelen E-mail cím";
        email.classList.add("error-border");
        errorFlag = true; 
    }

    if (!passwordIsValid(password.value)) {
        errorNodes[2].innerText = "A jelszó helytelen (8 és 15 közötti karakter, 1 számjegy, 1 nagybetű, 1 kisbetű)";
        password.classList.add("error-border");
        errorFlag = true; 
    }

    if (!errorFlag) {
        success.innerText = "A bejelentkezés sikeresen megtörtént!";
    }
}

//Kitörli a hibaüzeneteket
function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";    
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    password.classList.remove("error-border");
    success.innerText = "";
}

//Ellenőrzi, hogy a(z) user által megadott E-mail cím érvényes-e 
function emailIsValid(email){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

//Ellenőrzi, hogy a(z) user által megadott jelszó érvényes-e 
function passwordIsValid(password) {
    //8 és 15 karakter közötti jelszó ellenőrzése, amely legalább egy számjegyet, egy nagybetűt és egy kisbetűt tartalmaz
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return passwordPattern.test(password);
}


