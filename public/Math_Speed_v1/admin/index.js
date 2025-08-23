const questions = document.querySelector("#questions");

import { GET_CAU_HOI } from "../api.js";

const main = async () => {
  const topic = await fetch(GET_CAU_HOI).then((res) => res.json());

  let ques = [];
  topic.forEach((item) => {
    ques = ques.concat(item.level);
  });

  let chuDe = 1;
  let flag = false;
  const handleChuDe = (a, b) => {
    if (flag === true) {
      flag = false;
      return chuDe;
    }
    if (a != b) {
      flag = true;
      return chuDe++;
    }
    return chuDe;
  };

  const tbodyEl = ques
    .map((que, index, arr) => {
      return `
      <tr>
        <td
          class="px-6 py-4 whitespace-nowrap w-[60px] text-sm text-gray-500"
        >
          ${index + 1}
        </td>
        <td class=" w-[400px] px-6 py-4 text-sm text-gray-900">
          <div class="font-medium truncate w-[400px]">
            ${que.cauHoi}
          </div>
          <div class="text-xs text-gray-500 mt-1 truncate w-[400px]">
            ${que.luaChon
              .map((item, index) => {
                return `
                  ${String.fromCharCode(index + 65)}. ${item.noiDung}
                `;
              })
              .join("")}
          </div>
        </td>
        <td
          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          ${handleChuDe(que.chuDe.chuDe, arr[index + 1]?.chuDe.chuDe)}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >${que.chuDe.level}</span
          >
        </td>
        <td
          class="text-left w-[200px] px-6 py-4 whitespace-nowrap text-sm font-medium"
        >
          <button
            class="text-[--primary-color] hover:text-green-600 mr-3"
            id="changeQuestion"
            cauHoi="${que._id}"
          >
            Sửa
          </button>
          <button class="text-red-500 hover:text-red-700" cauHoi="${
            que._id
          }" id="deleteQuestion">
            Xóa
          </button>
        </td>
      </tr>
    `;
    })
    .join("");

  questions.innerHTML = tbodyEl;
};

main();

export default main;
