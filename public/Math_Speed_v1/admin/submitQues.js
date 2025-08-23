import { GET_CAU_HOI } from "../api.js";
import main from "./index.js";

document.getElementById("submit").addEventListener("click", async () => {
  const notyf = new Notyf();

  const chuDe = document.getElementById("chuDe").value;
  const level = document.getElementById("level").value;
  const cauHoi = document.getElementById("cauHoi").value.trim();

  const answers = Array.from(document.querySelectorAll("._add")).map((el) =>
    el.value.trim()
  );

  const correctIndex = Array.from(
    document.querySelectorAll("._add-radio")
  ).findIndex((radio) => radio.checked);

  const giaiThich = document.getElementById("giaiThich").value.trim();

  if (
    cauHoi === "" ||
    answers.length != 4 ||
    correctIndex === null ||
    giaiThich === ""
  ) {
    console.log(chuDe, level, cauHoi, answers, correctIndex, giaiThich);
    notyf.error("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  const questionData = {
    chuDe: {
      chuDe,
      level,
    },
    cauHoi,
    luaChon: [
      ...answers.map((item, index) => ({
        index,
        noiDung: item,
        dapAn: index === correctIndex,
      })),
    ],
    giaiThich,
  };

  await fetch(GET_CAU_HOI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(questionData),
  });

  notyf.success("Thêm câu hỏi thành công");

  document.getElementById("chuDe").value =
    document.querySelector("._add-option").value;
  document.getElementById("level").value = 1;
  document.getElementById("cauHoi").value = "";
  document.querySelectorAll("._add").forEach((el) => (el.value = ""));
  document
    .querySelectorAll("._add-radio")
    .forEach((radio) => (radio.checked = false));
  document.getElementById("giaiThich").value = "";

  await main();
});
