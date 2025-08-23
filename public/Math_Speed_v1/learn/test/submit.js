import { unit, level } from "./displayAns.js";
import { GET_CAU_HOI, GET_USER } from "../../api.js";

const submitButton = document.querySelector("#submitButton");
const comfirmSubmit = document.querySelector("#comfirmSubmit");
const markBox = document.querySelector("#markBox");

const handleSubmit = async () => {
  const ques = await fetch(GET_CAU_HOI).then((res) => res.json());

  const otmp = {};
  ques[unit - 1].level.forEach((item) => {
    otmp[item.chuDe.level] = true;
  });
  const maxLevel = Object.keys(otmp).length;

  const listQues = ques[unit - 1].level.filter((item) => {
    return item.chuDe.level == level;
  });

  if (localStorage.getItem("submit") == "true") {
    alert(`Điểm ${mark}/${listQues.length}`);
    return;
  }
  comfirmSubmit.classList.toggle("hidden");
  comfirmSubmit.classList.toggle("flex");

  document
    .querySelector("#comfirmButton")
    .addEventListener("click", async () => {
      document
        .querySelectorAll(".class-ex")
        .forEach((item) => item.classList.remove("hidden"));

      submitButton.classList.toggle("hidden");
      comfirmSubmit.classList.toggle("hidden");

      console.log(
        ques[unit - 1].level.filter((item) => {
          return item.chuDe.level == level;
        })
      );

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
              [...trueAs][index].classList.add(
                "border-blue-500",
                "bg-blue-200"
              );
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
        localStorage.setItem("submit", true);
        return;
      }

      answers.forEach((ans, index) => {
        console.log(ans);
        listQues[index].luaChon.forEach((item) => {
          console.log(item);
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
      localStorage.setItem("submit", true);

      if (mark >= Math.floor(0.7 * listQues.length)) {
        const token = localStorage.getItem("token");

        if (!token) {
          const infoUser = JSON.parse(sessionStorage.getItem("infoUser"));
          let newLevel = parseInt(level, 10) + 1;
          let newUnit = parseInt(unit);
          if (newLevel > maxLevel) {
            newLevel = 1;
            ++newUnit;
          }
          sessionStorage.setItem(
            "infoUser",
            JSON.stringify({
              email: "",
              password: "",
              quyen: "user",
              tienDo: {
                capDo: `${newUnit}`,
                level: newLevel,
              },
            })
          );
        } else {
          const infoUser = await fetch(`${GET_USER}${token}`)
            .then((res) => res.json())
            .catch((err) => console.error(err));

          console.log(infoUser);

          let newLevel = parseInt(level, 10) + 1;
          let newUnit = parseInt(unit, 10);
          if (newLevel > maxLevel) {
            newLevel = 1;
            newUnit = (parseInt(newUnit) + 1).toString();
          }

          console.log(token, newLevel, newUnit);

          await fetch(`${GET_USER}${token}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              capDo: newUnit,
              level: newLevel,
            }),
          });
        }
      }
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
