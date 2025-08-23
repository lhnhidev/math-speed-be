const back = document.querySelector("#back");
const back2 = document.querySelector("#back2");
const backModal = document.querySelector("#backModal");

const handleBack = () => {
  backModal.classList.toggle("hidden");
  backModal.classList.toggle("flex");

  document.querySelector("#comfirmBack").addEventListener("click", () => {
    document.location.href = "../index.html";
  });
};

back.addEventListener("click", () => {
  handleBack();
});

back2.addEventListener("click", () => {
  handleBack();
});
