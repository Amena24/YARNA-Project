document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded");

  const form = document.querySelector("form");
  const googleBtn = document.querySelector("button[type='button']");
  const toast = document.getElementById("toast");
    const goToSignin = document.getElementById("goToSignin");
    
  //TOAST SYSTEM
  
  const showToast = (message) => {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove("hidden");

    setTimeout(() => {
      toast.classList.add("opacity-100", "translate-y-0");
    }, 50);

    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0");

      setTimeout(() => {
        toast.classList.add("hidden");
      }, 300);
    }, 2000);
  };

  // ======================
  // LOCAL STORAGE HELPERS
  // ======================
  const getUsers = () =>
    JSON.parse(localStorage.getItem("users")) || [];

  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  const setLoggedUser = (user) =>
    localStorage.setItem("loggedInUser", JSON.stringify(user));

  // ======================
  // CHECK LOGGED USER
  // ======================
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedUser) {
    window.location.href = "index.html";
  }

  // ======================
  // PASSWORD HASH
  // ======================
  const hashPassword = (password) => btoa(password);

  // ======================
  // CHECK EMAIL EXISTS
  // ======================
  const emailExists = (email) =>
    getUsers().some((user) => user.email === email);

  // ======================
  // CREATE USER
  // ======================
  const createUser = (user) => {
    const users = getUsers();
    users.push(user);
    saveUsers(users);
  };

  // ======================
  // SIGN UP FORM
  // ======================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document
      .getElementById("full_name")
      .value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirm_password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// VALIDATION
if (!fullName || !email || !password || !confirmPassword) {
  showToast("Please fill in all fields.");
  return;
}

if (!emailRegex.test(email)) {
  showToast("Invalid email format");
  return;
}

if (password.length < 6) {
  showToast("Password must be at least 6 characters");
  return;
}

if (password !== confirmPassword) {
  showToast("Passwords do not match");
  return;
}

if (emailExists(email)) {
  showToast("Email already exists");
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

showToast("Account created successfully! 🎉");

setTimeout(() => {
  window.location.href = "index.html";
}, 2000);

  // ======================
  // GOOGLE SIGN UP (MOCK)
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

    console.log("Users after Google signup:", getUsers());

    showToast("Account created successfully! 🎉");
    window.location.href = "index.html";
  });
});

  goToSignin?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "sign-in.html";
  });
});
