// //identifiers

// const inputedEmail = document.getElementById('email').value;

// const subButton = document.getElementById('subscribe');

// const successDisplay = document.querySelector('.success');

// const errorDisplay = document.querySelector('.error');

// const personEmail = document.querySelector('.personEmail');
// const cardDisplay = document.querySelector('.card');
// const dismissMessage = document.getElementById('dismissMessage');

// // function to check if any inputed email is valid
// const isValidEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// };

// const checkEmail = () => {
//     console.log('checking email......');
//     const inputedEmail = document.getElementById('email').value;
//     const validEmailEntered = isValidEmail(inputedEmail); // check client email

//     if (validEmailEntered){
//         console.log(' This is a valid email');
//         subButton.disabled = false;
//         errorDisplay.innerHTML = ''; // Clear any previous message

//         if (personEmail) {
//             personEmail.innerHTML = inputedEmail; // Only if personEmail exists
//         }

//         // personEmail.innerHTML = inputedEmail // display entered email on success page
//         return; // exit the function if email is valid
//     } else {
//         console.log('this is an invalid email');
//         subButton.disabled = true;
//         errorDisplay.innerHTML = 'Invalid email address. Please try again.'; // Display error message

//         //clear the error message after 3 seconds
//         setTimeout(() => {
//             errorDisplay.innerHTML = '';
//         }, 3000);

//         // return;
//     }
    
// }; 


// // make a subscription to the newsletter
// subButton.addEventListener('click', () => {
//     // run  the function of chec king the email address by in voking the function 'checkemail'
//     checkEmail();

//     // get  the latest inputed
//     const inputedEmail = document.getElementById('email').value;

//     //check  if the email is valid and only show success display
//     if (isValidEmail(inputedEmail)){
//         cardDisplay.style.display = 'none';
//         successDisplay.style.display = 'block';
//     }
// });

// //function tfo dismiss confirmation message
// dismissMessage.addEventListener('click', () => {
//     //get the inputed email and log it to the console
//     const inputedEmail = document.getElementById('email').value
//     console.log(inputedEmail);

//     // Close the dismiss message and open the app back
//     successDisplay.style.display = 'none';
//     cardDisplay.style.display = 'flex';

//     // check if there is an already inputed value and set the value to an empty space
//     if (inputedEmail) {
//         document.getElementById('email').value = ''; //clear the error field
//         errorDisplay.innerHTML = ''; // clear the previoius message
//         personEmail.innerHTML = ''; // clear the PREVIOUS EMAIL displayed on success field

//     }
// });




// identifiers
const subButton = document.getElementById('subscribe');
const successDisplay = document.querySelector('.success');
const errorDisplay = document.querySelector('.error');
const personEmail = document.querySelector('.PersonEmail'); // Corrected class name
const cardDisplay = document.querySelector('.card');
const dismissMessage = document.getElementById('dismissMessage');

// function to check if any inputed email is valid
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const checkEmail = () => {
    console.log('checking email......');
    const inputedEmail = document.getElementById('email').value;
    const validEmailEntered = isValidEmail(inputedEmail); // check client email

    if (validEmailEntered) {
        console.log('This is a valid email');
        subButton.disabled = false;
        errorDisplay.innerHTML = ''; // Clear any previous message
        errorDisplay.style.display = 'none'; // Hide error display

        if (personEmail) {
            personEmail.innerHTML = inputedEmail; // Only if personEmail exists
        }
        return; // exit the function if email is valid
    } else {
        console.log('this is an invalid email');
        subButton.disabled = true;
        errorDisplay.innerHTML = 'Invalid email address. Please try again.'; // Display error message
        errorDisplay.style.display = 'block'; // Show error display

        // clear the error message after 3 seconds
        setTimeout(() => {
            errorDisplay.innerHTML = '';
            errorDisplay.style.display = 'none' 
        }, 3000);
    }
};

// make a subscription to the newsletter
subButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    checkEmail();

    // get the latest inputed
    const inputedEmail = document.getElementById('email').value;

    // check if the email is valid and only show success display
    if (isValidEmail(inputedEmail)) {
        cardDisplay.style.display = 'none'; // Corrected from Style to style
        successDisplay.style.display = 'block';
    }
});

// function to dismiss confirmation message
dismissMessage.addEventListener('click', () => {
    // get the inputed email and log it to the console
    const inputedEmail = document.getElementById('email').value;
    console.log(inputedEmail);

    // Close the dismiss message and open the app back
    successDisplay.style.display = 'none';
    cardDisplay.style.display = 'flex';

    // check if there is an already inputed value and set the value to an empty space
    if (inputedEmail) {
        document.getElementById('email').value = ''; // clear the error field
        errorDisplay.innerHTML = ''; // clear the previous message
        personEmail.innerHTML = ''; // clear the PREVIOUS EMAIL displayed on success field
    }
});