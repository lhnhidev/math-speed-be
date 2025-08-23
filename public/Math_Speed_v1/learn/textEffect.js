const text = "Chinh phục Toán 9 và Đề thi tuyển sinh vào 10";
const element = document.getElementById("descTyping");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 30);
  }
}

typeEffect();
