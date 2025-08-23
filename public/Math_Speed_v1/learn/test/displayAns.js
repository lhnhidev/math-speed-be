import { GET_CAU_HOI } from "../../api.js";

const url = new URL(window.location.href);

export const unit = url.searchParams.get("unit");
export const level = url.searchParams.get("level");

document.querySelector(
  "#heading"
).innerHTML = `Chủ đề ${unit} - Level ${level}`;

document.querySelector("#title").innerHTML = `Chủ đề ${unit} - Level ${level}`;

const main = async () => {
  const ques = await fetch(GET_CAU_HOI).then((res) => res.json());

  const listQues = ques[unit - 1].level.filter((item) => {
    return item.chuDe.level == level;
  });

  const shuffleArray = (ele) => {
    return ele.sort(() => Math.random() - 0.5);
  };

  let navQues = "";

  const quesEle = listQues
    .map((que, index) => {
      navQues += `<a
                    href="#id${index + 1}cau"
                    id="id${index + 1}"
                    class="flex hover:bg-gray-200 transition-all relative cursor-pointer justify-center items-center rounded-md border border-slate-600 p-1 w-8 h-8"
                  >
                    ${index + 1}
                    <div class="w-2 h-2 bg-red-500 border-red-500 absolute top-0 right-0 rounded-tr-md rounded-bl-md hidden"></div>
                  </a>`;

      const ans = shuffleArray(que.luaChon);

      return `
      <div id="id${index + 1}cau">
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

const cancelBack = document.querySelector("#cancelBack");

cancelBack.addEventListener("click", () => {
  document.querySelector("#backModal").classList.toggle("hidden");
  document.querySelector("#backModal").classList.toggle("flex");
});
