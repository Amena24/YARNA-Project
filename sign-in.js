

document.addEventListener("DOMContentLoaded", () => {
  console.log("Sign In Loaded");

  const form = document.querySelector("form");
  const googleBtn = document.querySelector("button[type='button']");
  const goToSignup = document.getElementById("goToSignup");
  const toast = document.getElementById("toast");

  
  // TOAST SYSTEM
  
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

  
  // LOCAL STORAGE 
  
  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

  const setLoggedUser = (user) =>
    localStorage.setItem("loggedInUser", JSON.stringify(user));

  const hashPassword = (p) => btoa(p);

  const findUser = (email) =>
    getUsers().find((u) => u.email === email);

  
  // BLOCK IF ALREADY LOGGED IN
  
  if (localStorage.getItem("loggedInUser")) {
    window.location.href = "index.html";
  }

  
  // SIGN IN
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      showToast("Please fill all fields");
      return;
    }

    const user = findUser(email);

    if (!user) {
      showToast("User not found. Please sign up first.");
      return;
    }

    if (user.password !== hashPassword(password)) {
      showToast("Incorrect password");
      return;
    }

    setLoggedUser(user);

    showToast("Welcome back 🎉");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });

 
  // GOOGLE SIGN IN (MOCK)
  
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

    showToast("Signed in with Google 🎉");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });


  // NAV TO SIGN UP

  goToSignup?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "sign-up.html";
  });
});