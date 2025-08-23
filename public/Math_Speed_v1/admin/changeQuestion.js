import { GET_CAU_HOI } from "../api.js";
import main from "./index.js";

document.addEventListener("click", async (e) => {
  if (e.target && e.target.id === "changeQuestion") {
    switchTab("change-question");
    const changeButton = e.target;

    const res = await fetch(
      `${GET_CAU_HOI}/${changeButton.getAttribute("cauHoi")}`
    ).then((res) => res.json());

    document.querySelector("#chuDeChange").value = res.chuDe.chuDe;
    document.querySelector("#levelChange").value = res.chuDe.level;
    document.querySelector("#cauHoiChange").value = res.cauHoi;
    [...document.querySelectorAll("._change-radio")].forEach((item, index) => {
      item.checked = res.luaChon[index].dapAn;
    });
    [...document.querySelectorAll("._change-input")].forEach((item, index) => {
      item.value = res.luaChon[index].noiDung;
    });
    document.querySelector("#giaiThichChange").value = res.giaiThich;
    document
      .querySelector("#changeButton")
      .addEventListener("click", async () => {
        const notyf = new Notyf();

        const chuDe = document.getElementById("chuDeChange").value;
        const level = document.getElementById("levelChange").value;
        const cauHoi = document.getElementById("cauHoiChange").value.trim();

        const answers = Array.from(
          document.querySelectorAll("._change-input")
        ).map((el) => el.value.trim());

        const correctIndex = Array.from(
          document.querySelectorAll("._change-radio")
        ).findIndex((radio) => radio.checked);

        const giaiThich = document
          .getElementById("giaiThichChange")
          .value.trim();

        if (
          cauHoi === "" ||
          answers.length != 4 ||
          correctIndex === null ||
          giaiThich === ""
        ) {
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

        console.log(e.target);

        const id = e.target.getAttribute("cauhoi");
        console.log(id);

        await fetch(`${GET_CAU_HOI}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questionData),
        });

        notyf.success("Cập nhật câu hỏi thành công");

        await main();
      });
  }
});
