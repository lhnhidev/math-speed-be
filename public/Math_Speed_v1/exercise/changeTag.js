const historyTag = document.querySelector("#historyTag");
const rulesTag = document.querySelector("#rulesTag");

historyTag.addEventListener("click", () => {
  historyTag.classList.add(
    "text-[var(--primary-color)]",
    "border-b-2",
    "border-[var(--primary-color)]"
  );
  rulesTag.classList.remove(
    "text-[var(--primary-color)]",
    "border-b-2",
    "border-[var(--primary-color)]"
  );
  document.querySelector("#rulesContent").classList.add("hidden");
  document.querySelector("#historyContent").classList.remove("hidden");
});

rulesTag.addEventListener("click", () => {
  rulesTag.classList.add(
    "text-[var(--primary-color)]",
    "border-b-2",
    "border-[var(--primary-color)]"
  );
  historyTag.classList.remove(
    "text-[var(--primary-color)]",
    "border-b-2",
    "border-[var(--primary-color)]"
  );
  document.querySelector("#historyContent").classList.add("hidden");
  document.querySelector("#rulesContent").classList.remove("hidden");
});
