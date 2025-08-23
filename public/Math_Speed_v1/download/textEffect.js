const text1 = "Tải ngay Ứng dụng MathSpeed";
const element1 = document.getElementById("titleDownload");

const text2 = "Ứng dụng MathSpeed đã có sẵn thiết bị di động";
const element2 = document.getElementById("descTyping");

let index1 = 0;
let index2 = 0;

const typeEffect1 = () => {
  if (index1 < text1.length) {
    element1.textContent += text1.charAt(index1);
    index1++;
    setTimeout(typeEffect1, 30);
  }
};

const typeEffect2 = () => {
  if (index2 < text2.length) {
    element2.textContent += text2.charAt(index2);
    index2++;
    setTimeout(typeEffect2, 30);
  }
};

typeEffect1();
typeEffect2();
