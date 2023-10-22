//Adatok definiálása 
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

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

    if (!phoneIsValid(phone.value)) {
        errorNodes[2].innerText = "Érvénytelen telefonszám (+36704677943 vagy 06704677943)";
        phone.classList.add("error-border");
        errorFlag = true; 
    }

    if (message.value.length < 1) {
        errorNodes[3].innerText = "Kérem adja meg az üzenetet";
        message.classList.add("error-border");
        errorFlag = true; 
    }

    if (!errorFlag) {
        success.innerText = "Az üzenetküldés sikeres volt!";
    }
}


//Kitörli a hibaüzeneteket
function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";    
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    message.classList.remove("error-border");
    success.innerText = "";
}

//Ellenőrzi, hogy a(z) user által megadott E-mail cím érvényes-e 
function emailIsValid(email){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

//Ellenőrzi, hogy a(z) user által megadott telefonszámot érvényes-e 
function phoneIsValid(phone) {
    let phonePattern = /^(?:\+?(?:36|\(36\)))[ -\/]?(?:(?:(?:(?!1|20|21|30|31|70|90)[2-9][0-9])[ -\/]?\d{3}[ -\/]?\d{3})|(?:(?:1|20|21|30|31|70|90)[ -\/]?\d{3}[ -\/]?\d{2}[ -\/]?\d{2}))$/;
    return phonePattern.test(phone);
}
