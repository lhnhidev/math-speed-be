const chuDe = document.querySelector("#chuDe");

import { GET_CAU_HOI } from "../api.js";

const topic = await fetch(GET_CAU_HOI).then((res) => res.json());
const chuDeHTML = topic
  .map((item, index) => {
    return `
      <option class="_add-option" value="${item.level[0].chuDe.chuDe}">${
      index + 1
    }. ${item.tenChuDe}</option>
  `;
  })
  .join("");

chuDe.innerHTML = chuDeHTML;
document.querySelector("#chuDeChange").innerHTML = chuDeHTML;
