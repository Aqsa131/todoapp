import { getAuth, createUserWithEmailAndPassword } from "../firebase.configuration.js"

const auth = getAuth();


const signUp = async () => {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
    let confirmPassword = document.getElementById('confirmPassword').value
    try {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user Signin");
                
            })
    }
    catch (error){
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    };
}
console.log('clicked');

document.getElementById('signUpSubmit')?.addEventListener('click', signUp)

let isPasswordVisible = false
let icon = document.querySelector('.eyeOpen')

const openEyeBtn = () => {
    let confirmPassword = document.getElementById('confirmPassword')
    console.log(confirmPassword.value);
    if (!isPasswordVisible) {
        icon.classList.add('fa-eye')
        console.log(icon);

        confirmPassword.type = "text"
    }
    else {
        confirmPassword.type = 'password'
        icon.classList.remove('fa-eye')
        console.log(icon);

    }
    isPasswordVisible = !isPasswordVisible
}
document.getElementById('openEyeBtn').addEventListener('click', openEyeBtn)

let isToggle = false
const flexSwitchCheckDefault = () => {
    console.log("togling");
    const body = document.querySelector(".body")
    if (!isToggle) {
        body.classList.toggle('dark-mode')
    }
}
document.getElementById('flexSwitchCheckDefault')?.addEventListener("click", flexSwitchCheckDefault)