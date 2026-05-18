console.log("Sign-up script loaded");
const form = document.querySelector('form');
const googleBtn = document.querySelector("button[type='button']");

googleBtn.addEventListener('click', () => {
    // Handle Google sign-up logic here
});
// Prevent logged user from opening signup again
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
if (loggedUser) {
    window.location.href = 'index.html'; // Redirect to homepage or dashboard
}
// password encryption
const hashPassword = (password) => btoa(password);    ; 


