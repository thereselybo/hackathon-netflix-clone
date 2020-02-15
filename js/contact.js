const form = document.querySelector("#contact-form");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameValue = firstName.value;
    const firstNameError = document.querySelector("#firstNameError");

    if(checkLength(firstNameValue)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailValue = email.value;
    const emailError = document.querySelector("#emailError");
    const invalidEmail = document.querySelector("#invalidEmail");

    if(checkLength(emailValue)) {
        emailError.style.display = "none";
        
        if(validateEmail(emailValue)) {
            invalidEmail.style.display = "none";
        } else {
            invalidEmail.style.display = "block";
        }
    } else {
        emailError.style.display = "block";
    }
}

function checkLength(value) {
    const trimmed = value.trim();
    if (trimmed.length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}