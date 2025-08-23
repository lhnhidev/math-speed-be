import { GET_CAU_HOI, GET_TEST_ATTEMP_BY_ID } from "../../api.js";

const historyNav = document.querySelector("#historyNav");

const handleDate = (dat) => {
  const date = new Date(dat);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

let hisQues = "";

const main = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const testAttempt = await fetch(`${GET_TEST_ATTEMP_BY_ID}${id}`).then((res) =>
    res.json()
  );

  const quesEleArr = await Promise.all(
    testAttempt.luaChon.map(async (que, index) => {
      const cauHoi = await fetch(`${GET_CAU_HOI}/${que.cauHoi}`).then((res) =>
        res.json()
      );

      hisQues += `<a
                  href="#${cauHoi._id}"
                  class="flex hover:bg-gray-200 transition-all relative cursor-pointer justify-center items-center rounded-md border border-slate-600 p-1 w-8 h-8 ${
                    que.chon != null
                      ? "bg-[var(--primary-color)] text-white"
                      : ""
                  }"
                >
                  ${index + 1}
                  <div class="w-2 h-2 bg-red-500 border-red-500 absolute top-0 right-0 rounded-tr-md rounded-bl-md hidden"></div>
                </a>`;

      return `
      <div class="my-question" id="${cauHoi._id}">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-bold text-justify">
            Câu ${index + 1}: ${cauHoi.cauHoi}
          </h2>
        </div>
        <div class="space-y-3 mt-5">
          ${cauHoi.luaChon
            .map((a, ai) => {
              return `
                <div
                  class="cursor-pointer py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-200 transition-all ${
                    que.chon != null && que.chon === ai
                      ? "border-[var(--primary-color)] bg-green-200"
                      : a.dapAn === true
                      ? "border-blue-500 bg-blue-200"
                      : ""
                  }"
                  question="${index + 1}"
                  index="${a.index}"
                >
                  ${String.fromCharCode(65 + ai)}. ${a.noiDung}
                </div>
              `;
            })
            .join("")}
        </div>
  
        <div class="mt-4">
            <h2 class="text-lg mb-1 font-bold text-[var(--primary-color)]">Giải thích:</h2>
            <div>
              ${cauHoi.giaiThich}
            </div>
        </div>
      </div>
    `;
    })
  );

  const quesEle = quesEleArr.join("");

  document.querySelector("#queList").innerHTML = quesEle;
  document.querySelector("#historyNav").innerHTML = hisQues;

  document.querySelector("#descBox").innerHTML = `
    <div>
      <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
        Điểm: ${testAttempt.diem}/${testAttempt.luaChon.length}
      </h2>
      <div class="space-y-2 mt-3">
        <p class="text-lg">Thời gian làm bài: ${
          testAttempt.thoiGianLamBai
        } phút</p>
        <p class="text-lg">Ngày làm bài: ${handleDate(
          testAttempt.ngayBatDauThi
        )}</p>
        <p class="text-lg">Số câu đã làm: ${testAttempt.luaChon.reduce(
          (total, item) => {
            return item.chon === null ? total : ++total;
          },
          0
        )}</p>
        <p class="text-lg">Số câu làm đúng: ${testAttempt.diem}</p>
      </div>
    </div>
  `;
};

main();
