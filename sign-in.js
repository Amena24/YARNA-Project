console.log("Sign-in script loaded");
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sign-in loaded");

  const form = document.querySelector("form");
  const googleBtn = document.querySelector("button[type='button']");
  const goToSignup = document.getElementById("goToSignup");

  // ======================
  // LOCAL STORAGE HELPERS
  // ======================
  const getUsers = () =>
    JSON.parse(localStorage.getItem("users")) || [];

  const setLoggedUser = (user) =>
    localStorage.setItem("loggedInUser", JSON.stringify(user));

  const hashPassword = (password) => btoa(password);

  const findUser = (email) =>
    getUsers().find((user) => user.email === email);

  // ======================
  // SIGN IN
  // ======================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // VALIDATION
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = findUser(email);

    if (!user) {
      alert("User not found. Please sign up first.");
      return;
    }

    if (user.password !== hashPassword(password)) {
      alert("Incorrect password");
      return;
    }

    setLoggedUser(user);

    console.log("Logged in user:", user);

    alert("Welcome back ");

    window.location.href = "index.html";
  });

  // ======================
  // GOOGLE SIGN IN (MOCK)
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

    setLoggedUser(googleUser);

    alert("Signed in with Google 🎉");

    window.location.href = "index.html";
  });

  // ======================
  // NAVIGATION TO SIGN UP
  // ======================
  goToSignup?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "signup.html";
  });
});