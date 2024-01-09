const password = document.querySelector('#user_password');
const passwordConfirm = document.querySelector('#password_confirm');
const submitBtn = document.querySelector('#submit-btn');
let counter = 0;


function submitBtnPageLoad() {
    submitBtn.addEventListener('click' , (e) => {
        if (password.value !== passwordConfirm.value) {
            console.log("test")
            e.preventDefault();
            if (counter == 0) {
                passwordConfirm.classList.replace("input-password" , "input-error");
                password.classList.replace("input-password" , "input-error")
                password.parentElement.classList.add("error-message");
                passwordCheck();
            }
            counter = counter + 1;
            
        }

    })
}

function passwordCheck() {
    passwordConfirm.addEventListener('input' , () => {
        if (passwordConfirm.value === password.value) {
            passwordConfirm.classList.replace("input-error" , "input-password");
            password.classList.replace("input-error" , "input-password")
            password.parentElement.classList.remove("error-message");
            
        } else {
            if (passwordConfirm.classList.contains("input-password")) {
                passwordConfirm.classList.replace("input-password" , "input-error");
                password.classList.replace("input-password" , "input-error")
                password.parentElement.classList.add("error-message");
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    submitBtnPageLoad();

    
  });
