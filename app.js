const signup_card = document.getElementById('signup_card');
const success_box = document.getElementById('success_box')
const subscriptionForm = document.getElementById('form');
const submitBtn = document.getElementById('submit');
const dismissBtn = document.getElementById('clear-btn');
const errorMessage = document.getElementById('email-error');
const inputBox = document.getElementById('email');
const failInput = document.querySelector('.fail')

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // errorMessage.style.display = "block"

    let isValid = true;

     // Validate email (must be in a valid email format)
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Simple email regex
    if (!data.email || !emailPattern.test(data.email)) {
        isValid = false;
        errorMessage.style.display = "block";
        // inputBox.style.background = "hsl(4, 100%, 67%)";
        // // inputBox.style.border = "hsl(340, 94%, 51%)";

    } if(isValid) {   
        signup_card.style.display = "none";
        success_box.style.display = "flex";
    }



}

subscriptionForm.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', function(){
    signup_card.style.display = "flex";
    success_box.style.display = "none";
    errorMessage.style.display = "none";
})