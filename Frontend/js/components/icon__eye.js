function statusVisibleChange() {
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password__cadastro--usuario");

  if (password.type == "password") {
    password.type = "text";
    togglePassword.classList.toggle("bi-eye");
    } else {
    password.type = "password";
    togglePassword.classList.remove("bi-eye");
  }
};
