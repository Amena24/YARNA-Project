document.addEventListener("DOMContentLoaded", () => {
  console.log("Forgot Password Loaded");

  const form = document.querySelector("form");
  const toast = document.getElementById("toast");
  const backToSignin = document.getElementById("backToSignin");

  
  // TOAST SYSTEM
 
  const showToast = (message, type = "success") => {
    if (!toast) return;

    toast.textContent = message;

    // simple color switch
    if (type === "error") {
      toast.classList.remove("bg-primary");
      toast.classList.add("bg-red-500");
    } else {
      toast.classList.remove("bg-red-500");
      toast.classList.add("bg-primary");
    }

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
  
  const getUsers = () =>
    JSON.parse(localStorage.getItem("users")) || [];

  const findUser = (email) =>
    getUsers().find((u) => u.email === email);

  
  // FORM SUBMIT
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {
      showToast("Please enter your email", "error");
      return;
    }

    const user = findUser(email);

    if (!user) {
      showToast("Email not found", "error");
      return;
    }

    //  reset success
    showToast("Reset link sent to your email ✉️");

    form.reset();
  });

  
  // BACK TO SIGN IN
  
  backToSignin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "sign-in.html";
  });
});
 
 