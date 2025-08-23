import { GET_CAU_HOI } from "../../api.js";
import { handleConfirmSubmit } from "./submit.js";

const params = new URLSearchParams(window.location.search);
const timeValue = params.get("time");
let timeDone = 0;

export const getTimeDone = () => timeDone;
export const setTimeDone = (timeSetValue) => {
  timeDone = timeSetValue;
};

const time = document.querySelector("#time");

const startCountdown = (timeValue) => {
  let totalSeconds = timeValue * 60;

  const updateTimer = () => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const format =
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");

    if (localStorage.getItem("submit2") === "true") {
      clearInterval(timer);
      time.classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__infinite"
      );
      return;
    }

    time.innerHTML = format;

    if (totalSeconds > 60) {
      totalSeconds--;
      timeDone++;
    } else if (totalSeconds > 0) {
      totalSeconds--;
      timeDone++;
      time.classList.add(
        "text-red-500",
        "animate__animated",
        "animate__pulse",
        "animate__infinite"
      );
    } else {
      clearInterval(timer);
      time.innerHTML = "Hết giờ";
      time.classList.add("text-red-500");
      time.classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__infinite"
      );
      timeDone = timeValue;
      handleConfirmSubmit();
    }
  };

  updateTimer();

  const timer = setInterval(updateTimer, 1000);
};

startCountdown(timeValue);

export const SO_CAU_HOI = 30;
const ques = await fetch(GET_CAU_HOI).then((res) => res.json());

let allQuestions = [];
ques.forEach((item) => {
  allQuestions = allQuestions.concat(item.level);
});

for (let i = allQuestions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
}

export const listQues = allQuestions.slice(0, SO_CAU_HOI);

document.querySelector("#heading").innerHTML = `Luyện đề`;
document.querySelector("#title").innerHTML = `Luyện đề`;

const main = async () => {
  const shuffleArray = (ele) => {
    return ele.sort(() => Math.random() - 0.5);
  };

  let navQues = "";

  const quesEle = listQues
    .map((que, index) => {
      navQues += `<a
                    href="#${que._id}"
                    id="id${index + 1}"
                    class="flex hover:bg-gray-200 transition-all relative cursor-pointer justify-center items-center rounded-md border border-slate-600 p-1 w-8 h-8"
                  >
                    ${index + 1}
                    <div class="w-2 h-2 bg-red-500 border-red-500 absolute top-0 right-0 rounded-tr-md rounded-bl-md hidden"></div>
                  </a>`;

      const ans = shuffleArray(que.luaChon);

      return `
      <div class="my-question" id="${que._id}">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-bold max-w-[85%] text-justify">
            Câu ${index + 1}: ${que.cauHoi}
          </h2>
          <div tar="id${
            index + 1
          }" class="fl text-gray-600 cursor-pointer sm:flex hidden items-center justify-end w-32 underline">
          Đặt cờ 
          <i class="ml-1 fa-solid fa-flag"></i>
        </div>
        </div>
        <div class="space-y-3 mt-5">
          ${ans
            .map((a, ai) => {
              return `
                <div
                  class="cursor-pointer py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-200 transition-all"
                  question="${index + 1}"
                  index="${a.index}"
                >
                  ${String.fromCharCode(65 + ai)}. ${a.noiDung}
                </div>
                
              `;
            })
            .join("")}
        </div>
  
        <div class="mt-4 hidden class-ex">
            <h2 class="text-lg mb-1 font-bold text-[var(--primary-color)]">Giải thích:</h2>
            <div>
              ${que.giaiThich}
            </div>
        </div>
      </div>
    `;
    })
    .join("");

  document.querySelector("#questions").innerHTML = quesEle;
  document.querySelector("#navQuestion").innerHTML = navQues;
};

main();

const childTimerModal = document.querySelector("#childTimerModal");

if (childTimerModal) {
  childTimerModal.addEventListener("click", () => {
    document.querySelector("#timerModal").classList.remove("hidden");
  });
}

const cancleButton = document.querySelector("#cancelButton");

cancleButton.addEventListener("click", () => {
  document.querySelector("#comfirmSubmit").classList.toggle("hidden");
  document.querySelector("#comfirmSubmit").classList.toggle("flex");
});

const cancelBack = document.querySelector("#cancelBack");

cancelBack.addEventListener("click", () => {
  document.querySelector("#backModal").classList.toggle("hidden");
  document.querySelector("#backModal").classList.toggle("flex");
});
