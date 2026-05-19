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

 
 