const switchTab = (tabId) => {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.add("hidden");
    tab.classList.remove("block");
  });

  document.getElementById(tabId).classList.remove("hidden");
  document.getElementById(tabId).classList.add("block");

  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("realId") === tabId) {
      link.classList.add("bg-[--primary-color]", "text-white");
      link.classList.remove("text-gray-700", "hover:bg-gray-100");
    } else {
      link.classList.remove("bg-[--primary-color]", "text-white");
      link.classList.add("text-gray-700", "hover:bg-gray-100");
    }
  });
};
