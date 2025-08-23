const bar = document.querySelector("#bar");
bar.addEventListener("click", () => {
  document.querySelector("#subNav").classList.toggle("hidden");
});

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

const login1 = document.querySelector("#login1");
const logout1 = document.querySelector("#logout1");
const login2 = document.querySelector("#login2");
const logout2 = document.querySelector("#logout2");

if (logout1) {
  logout1.addEventListener("click", () => handleLogout());
}

if (logout2) {
  logout2.addEventListener("click", () => handleLogout());
}

const token = localStorage.getItem("token");

if (token) {
  if (logout1) {
    logout1.classList.toggle("hidden");
  }

  if (logout2) {
    logout2.classList.toggle("hidden");
  }

  if (login1) {
    login1.classList.toggle("hidden");
  }

  if (login2) {
    login2.classList.toggle("hidden");
  }
}
