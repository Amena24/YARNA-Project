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

//  SIGN UP FORM SUBMISSION
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const fullName = document.getElementById("full_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // VALIDATION
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    } 
    
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (emailExists(email)) {
        alert("Email already exists");
        return;
    }

    const newUser = {
        id: Date.now(),
        fullName,
        email,
        password: hashPassword(password),
        provider: "local"
    };
    
    createUser(newUser);
    setLoggedUser(newUser);

    alert("Account created successfully!");
    window.location.href = "index.html"; // Redirect to homepage or dashboard
});


// GOOGLE SIGN UP (MOCK)
googleBtn.addEventListener('click', () => {
    const googleUser = {
        id: Date.now(),
        fullName: "Google User",
        email: "googleuser@gmail.com",
        password: hashPassword("googlepassword"),
        provider: "google"
    };


  const users = getUsers();

  if (!users.some((u) => u.email === googleUser.email)) {
    createUser(googleUser);
  }
    setLoggedUser(googleUser);
    alert("Account created successfully!");
    window.location.href = "index.html"; // Redirect to homepage or dashboard
});