import { ADD_TEST_ATTEMP } from "../../api.js";
import { getTimeDone, listQues } from "./displayAns.js";

const submitButton = document.querySelector("#submitButton");
const comfirmSubmit = document.querySelector("#comfirmSubmit");
const markBox = document.querySelector("#markBox");

let history = {};

const saveHistory = async () => {
  const token = localStorage.getItem("token");

  const questions = document.querySelectorAll(".my-question");

  if (!token) {
    // history.nguoiDung = null;
    // history.ngayBatDauThi = new Date();
    // history.thoiGianLamBai = Math.ceil(getTimeDone() / 60);
    return;
  } else {
    history.nguoiDung = token;
    history.ngayBatDauThi = new Date();
    history.thoiGianLamBai = Math.ceil(getTimeDone() / 60);
    history.luaChon = [...questions].map((question) => {
      const index = question
        .querySelector("div[index].active")
        ?.getAttribute("index");
      return {
        cauHoi: question.id,
        chon: index ? index : null,
      };
    });
    history.diem = getMark();
  }

  await fetch(ADD_TEST_ATTEMP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(history),
  });
};

export const handleConfirmSubmit = async () => {
  document
    .querySelectorAll(".class-ex")
    .forEach((item) => item.classList.remove("hidden"));

  submitButton.classList.add("hidden");
  comfirmSubmit.classList.add("hidden");

  const answers = [...document.querySelectorAll(".active")].map((ans) => {
    return {
      question: ans.getAttribute("question"),
      index: ans.getAttribute("index"),
    };
  });

  listQues.forEach((el, index) => {
    const answer = el.luaChon;
    let trueA = null;
    answer.forEach((aEl) => {
      if (aEl.dapAn == true) {
        trueA = aEl.index;
      }
      const trueAs = document.querySelectorAll(`[index="${trueA}"]`);

      if ([...trueAs][index]?.className != undefined) {
        if (![...trueAs][index]?.className.includes("active")) {
          [...trueAs][index].classList.add("border-blue-500", "bg-blue-200");
        }
      }
    });
  });

  if (answers.length === 0) {
    if (window.matchMedia("(max-width: 640px)").matches) {
      alert(`Điểm 0/${listQues.length}`);
    } else {
      markBox.innerHTML = `
          <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
            Điểm: 0/${listQues.length}
          </h2>
          <p>Chúc mừng bạn đã hoàn thành xuất sắc bài thi của mình!</p>
        `;
    }
    localStorage.setItem("submit2", true);

    saveHistory();

    return;
  }

  answers.forEach((ans, index) => {
    listQues[index].luaChon.forEach((item) => {
      if (item.index == ans.index && item.dapAn == true) ++mark;
    });
  });

  if (window.matchMedia("(max-width: 640px)").matches) {
    alert(`Điểm ${mark}/${listQues.length}`);
  } else {
    markBox.innerHTML = `
        <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
          Điểm: ${mark}/${listQues.length}
        </h2>
        <p>Chúc mừng bạn đã hoàn thành xuất sắc bài thi của mình!</p>
      `;
  }
  localStorage.setItem("submit2", true);

  saveHistory();
};

const handleSubmit = async () => {
  if (localStorage.getItem("submit2") == "true") {
    alert(`Điểm ${mark}/${listQues.length}`);
    return;
  }

  comfirmSubmit.classList.toggle("hidden");
  comfirmSubmit.classList.toggle("flex");

  document
    .querySelector("#comfirmButton")
    .addEventListener("click", async () => {
      handleConfirmSubmit();
    });
};

let mark = 0;
submitButton.addEventListener("click", () => {
  handleSubmit();
});

document.querySelector("#submit2").addEventListener("click", () => {
  handleSubmit();
});

export const getMark = () => {
  return mark;
};
