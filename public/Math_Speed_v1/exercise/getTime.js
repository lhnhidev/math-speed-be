let time = null;

const timerOptions = document.querySelectorAll(".timer-option");
const customTimeBtn = document.getElementById("customTimeBtn");

const notyf = new Notyf();

const hiddenModal = () => {
  const modal = document.getElementById("timerModal");
  modal.classList.add("animate__animated", "animate__fadeOut");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("animate__animated", "animate__fadeOut");
  }, 800);
};

const showModal = () => {
  const modal = document.getElementById("timerModal");
  modal.classList.add("animate__animated", "animate__fadeIn");
  setTimeout(() => {
    modal.classList.remove("animate__animated", "animate__fadeIn");
  }, 800);
};

document.querySelector("#timerModal > div")?.addEventListener("click", () => {
  hiddenModal();
  document.body.classList.remove("overflow-hidden");
});

const clearSelection = () => {
  timerOptions.forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
  customTimeBtn.style.backgroundColor = "";
  customTimeBtn.style.color = "";
};

timerOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    customTimeBtn.innerHTML = "Tùy chỉnh thời gian";
    clearSelection();
    btn.style.backgroundColor = "var(--primary-color)";
    btn.style.color = "#fff";

    time = parseInt(btn.textContent);
    notyf.success(`Đã cài đặt thời gian kiểm tra là ${time} phút !`);
    console.log(time);
  });
});

customTimeBtn?.addEventListener("click", () => {
  showModal();
  timerModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  customTimeBtn.value = "";
  customTimeBtn.focus();
});

const closeModal = document.querySelector("#closeModal");

closeModal?.addEventListener("click", () => {
  hiddenModal();
  document.body.classList.remove("overflow-hidden");
});

const confirmTimeBtn = document.querySelector("#confirmTimeBtn");

confirmTimeBtn?.addEventListener("click", () => {
  const val = parseInt(customTimeInput.value);
  console.log(val);
  if (!isNaN(val) && val >= 1 && val <= 360) {
    time = val;
    console.log(time);

    hiddenModal();
    document.body.classList.remove("overflow-hidden");

    document.querySelectorAll(".timer-option").forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    customTimeBtn.style.backgroundColor = "var(--primary-color)";
    customTimeBtn.style.color = "#fff";
    customTimeBtn.innerHTML = `${time} phút`;
    notyf.success(`Đã cài đặt thời gian kiểm tra là ${time} phút !`);
  } else {
    const notyf = new Notyf();
    notyf.error("Vui lòng nhập số từ 1 đến 360!");
  }
});

export function getTime() {
  return time;
}
