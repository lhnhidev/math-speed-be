const observer = new MutationObserver(() => {
  const questionElements = document.querySelectorAll("[question]");
  if (questionElements.length) {
    questionElements.forEach((el) => {
      el.addEventListener("click", () => {
        console.log(localStorage.getItem("submit"));
        if (localStorage.getItem("submit") === "true") {
          return;
        }
        document
          .querySelector(`#id${el.getAttribute("question")}`)
          .classList.add("bg-[var(--primary-color)]", "text-white");
        const qValue = el.getAttribute("question");

        const sameQuestionEls = document.querySelectorAll(
          `[question="${qValue}"]`
        );

        sameQuestionEls.forEach((item) => {
          item.classList.remove(
            "active",
            "border-[var(--primary-color)]",
            "bg-green-200"
          );
          item.classList.add(
            "border-gray",
            "border-gray-300",
            "hover:bg-gray-200"
          );
        });

        el.classList.add(
          "active",
          "border-[var(--primary-color)]",
          "bg-green-200"
        );
        el.classList.remove("hover:bg-gray-200");
      });
    });

    observer.disconnect();
  }

  const flags = document.querySelectorAll(".fl");
  flags.forEach((fl) => {
    fl.addEventListener("click", () => {
      document
        .querySelector(`#${fl.getAttribute("tar")} > div`)
        .classList.toggle("hidden");
      if (fl.innerHTML.includes("Đặt cờ")) {
        fl.innerHTML = fl.innerHTML.replace("Đặt cờ", "Xóa cờ");
        fl.classList.add("text-red-500");
      } else {
        fl.innerHTML = fl.innerHTML.replace("Xóa cờ", "Đặt cờ");
        fl.classList.remove("text-red-500");
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("paste", (e) => e.preventDefault());
document.body.style.userSelect = "none";

document.addEventListener("keydown", (e) => {
  if (e.key === "F12") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i")
    e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j")
    e.preventDefault();
  if (e.ctrlKey && e.key.toLowerCase() === "u") e.preventDefault();
});
