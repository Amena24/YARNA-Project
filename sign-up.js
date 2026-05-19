document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded");

  const form = document.querySelector("form");
  const googleBtn = document.querySelector("button[type='button']");

  // ======================
  // LOCAL STORAGE
  // ======================
  const getUsers = () =>
    JSON.parse(localStorage.getItem("users")) || [];

  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  const setLoggedUser = (user) =>
    localStorage.setItem("loggedInUser", JSON.stringify(user));

  // ======================
  // BLOCK IF LOGGED IN
  // ======================
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedUser) {
    window.location.href = "index.html";
  }

  // ======================
  // HELPERS
  // ======================
  const hashPassword = (password) => btoa(password);

  const emailExists = (email) =>
    getUsers().some((user) => user.email === email);

  const createUser = (user) => {
    const users = getUsers();
    users.push(user);
    saveUsers(users);
  };

  // ======================
  // SIGN UP
  // ======================
  form.addEventListener("submit", (e) => {
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
  provider: "local",
};

createUser(newUser);
setLoggedUser(newUser);

    console.log("Users after signup:", getUsers());

    alert("Account created successfully!");
    window.location.href = "index.html";
  });

  // ======================
  // GOOGLE SIGN UP
  // ======================
  googleBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const googleUser = {
      id: Date.now(),
      fullName: "Google User",
      email: "googleuser@gmail.com",
      password: hashPassword("googlepassword"),
      provider: "google",
    };

    const users = getUsers();

    if (!users.some((u) => u.email === googleUser.email)) {
      createUser(googleUser);
    }

    setLoggedUser(googleUser);

    showToast("Signed up with Google 🎉");

    alert("Account created successfully!");
    window.location.href = "index.html";
  });


  goToSignin?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "sign-in.html";
  });
});
