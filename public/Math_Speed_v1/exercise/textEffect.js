const text = "Nâng cao kiến thức thông qua các bài kiểm tra";
const element = document.getElementById("descTyping");
let index = 0;

const typeEffect = () => {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 30);
  }
};

typeEffect();
