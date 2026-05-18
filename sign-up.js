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

// LOCAL STORAGE SIGN-UP
const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

const setLoggedUser = (user) =>
  localStorage.setItem("loggedInUser", JSON.stringify(user));

// CHECK EMAIL EXISTS
const emailExists = (email) => {
    const users = getUsers();
    return users.some(user => user.email === email);
};

// CREATE USER
const createUser = (user) => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};


