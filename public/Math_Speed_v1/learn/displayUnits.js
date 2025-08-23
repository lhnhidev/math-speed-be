import { units as unitsOrigin } from "./setData.js";
import { GET_CAU_HOI, GET_USER } from "../api.js";

const loichucArray = [
  {
    id: "68a5da6c0439f75a5d1c2b63",
    loiChuc:
      "Chúc bạn giải phương trình như giải 'bài tập tình bạn'—nhanh và đúng đáp số!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b64",
    loiChuc:
      "Hệ hai phương trình khó? Không sao, bạn vẫn 'giải quyết 2 việc cùng lúc' cực đỉnh!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b65",
    loiChuc:
      "Chúc bạn lập hệ phương trình như lập chiến lược chơi game—tỉ mỉ mà hiệu quả!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b66",
    loiChuc:
      "Biến phức tạp thành đơn giản, chúc bạn luôn có 'bùa giải' cho mọi bài tập!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b67",
    loiChuc:
      "Bất đẳng thức? Chúc bạn luôn đạt '≥' điểm 10 trong mọi bài kiểm tra!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b68",
    loiChuc:
      "Bất phương trình bậc nhất? Chúc bạn đi đúng đường và không bị lạc lối!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b69",
    loiChuc:
      "Căn bậc hai khó? Chúc bạn tìm được 'căn nguyên' của niềm vui mỗi ngày!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b6a",
    loiChuc: "Khai căn bậc hai? Chúc bạn nhân đôi niềm vui, chia đều nỗi buồn!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b6b",
    loiChuc:
      "Rút gọn biểu thức? Chúc bạn luôn 'gọn gàng' cả trong học tập lẫn cuộc sống!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b6c",
    loiChuc: "Căn bậc ba? Chúc bạn tìm được gốc rễ mọi thành công!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b6d",
    loiChuc: "Tỉ số lượng giác? Chúc bạn đo đúng niềm vui và cười thật chuẩn!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b6e",
    loiChuc:
      "Hệ thức tam giác vuông? Chúc bạn luôn vững vàng, đứng thẳng như cạnh huyền!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b6f",
    loiChuc:
      "Đường tròn đầu tiên? Chúc bạn luôn 'tròn trịa' trong học tập và trò chơi!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b70",
    loiChuc: "Cung và dây? Chúc bạn kết nối bạn bè như những sợi dây bền chặt!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b71",
    loiChuc:
      "Độ dài cung tròn? Chúc bạn trải nghiệm mọi niềm vui thật trọn vẹn!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b72",
    loiChuc:
      "Vị trí đường thẳng và đường tròn? Chúc bạn luôn tìm được điểm chung với mọi người!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b73",
    loiChuc: "Hai đường tròn? Chúc bạn gặp nhiều vòng tròn bạn bè vui nhộn!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b74",
    loiChuc: "Hàm số y=ax²? Chúc bạn luôn đi lên theo parabol hạnh phúc!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b75",
    loiChuc: "Phương trình bậc hai? Chúc bạn luôn tìm ra nghiệm vui mỗi ngày!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b76",
    loiChuc:
      "Định lí Viète? Chúc bạn kết nối được quá khứ và hiện tại một cách 'thần kỳ'!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b77",
    loiChuc:
      "Lập phương trình? Chúc bạn biến ý tưởng thành hành động siêu nhanh!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b78",
    loiChuc: "Bảng tần số? Chúc bạn thống kê thật nhiều kỉ niệm vui mỗi ngày!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b79",
    loiChuc:
      "Tần số tương đối? Chúc bạn biết cân bằng giữa học và chơi thật chuẩn!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b7a",
    loiChuc:
      "Bảng ghép nhóm? Chúc bạn luôn tìm được 'nhóm siêu chất' đồng hành!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b7b",
    loiChuc:
      "Phép thử ngẫu nhiên? Chúc bạn gặp may mắn liên tục như trúng xổ số!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b7c",
    loiChuc: "Xác suất? Chúc bạn luôn tăng xác suất thành công và giảm rủi ro!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b7d",
    loiChuc: "Góc nội tiếp? Chúc bạn có trái tim rộng mở, bao dung và ấm áp!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b7e",
    loiChuc:
      "Đường tròn nội ngoại tiếp? Chúc bạn vừa có vòng ngoài bảo vệ vừa có vòng trong yêu thương!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b7f",
    loiChuc:
      "Tứ giác nội tiếp? Chúc bạn có những mối quan hệ bền chặt như bốn cạnh nối nhau!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b80",
    loiChuc: "Đa giác đều? Chúc bạn sống cân bằng, đều đặn và hạnh phúc!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b81",
    loiChuc:
      "Hình trụ và hình nón? Chúc bạn có nền tảng vững chắc và khát vọng bay cao!",
  },
  {
    id: "68a5da6c0439f75a5d1c2b82",
    loiChuc: "Hình cầu? Chúc bạn luôn trọn vẹn, viên mãn và đầy yêu thương!",
  },
];

const units = JSON.parse(localStorage.getItem("units")) || unitsOrigin;
const unitEl = document.querySelector("#units");

let infoUser = null;

const main = async () => {
  const token = localStorage.getItem("token");

  infoUser = JSON.parse(sessionStorage.getItem("infoUser")) || {
    email: "",
    password: "",
    quyen: "user",
    tienDo: {
      capDo: "1",
      level: 1,
    },
  };

  sessionStorage.setItem("infoUser", JSON.stringify(infoUser));

  if (token) {
    infoUser = await fetch(`${GET_USER}${token}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }

  const data = await fetch(GET_CAU_HOI)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  // console.log(infoUser);
  // console.log(data);

  const htmlUnitEl = data
    .map((unit, index) => {
      const levels = unit.level.map((item) => item.chuDe.level);

      const obj = {};
      for (let lvl of levels) {
        obj[lvl] = true;
      }

      const uniqueLevels = Object.keys(obj);
      const count = Object.keys(uniqueLevels).length;

      return `
    <div class="flex flex-col items-center relative">
            <div
              class="animate__animated opacity-0 ob_fadeInLeft relative z-0 shadow-lg rounded-xl p-4 bg-[var(--primary-color)] text-white md:w-[560px] sm:w-[400px] w-[300px] flex justify-between items-center gap-10"
            >
              <div>
                <div
                  class="flex gap-2 items-center text-xl font-bold opacity-90"
                >
                  <i class="fa-solid fa-book" class=""></i>
                  Chủ đề ${index + 1}
                </div>
                <div class="mt-2">${unit.tenChuDe}</div>
              </div>
              <a
                href="./theory.html?unit=${index + 1}"
                class="relative h-12 w-36 rounded-lg flex justify-center items-center gap-2 border-2 border-[var(--thir-color)] px-3 hover:scale-105 transition-all cursor-pointer"
              >
                <i class="fa-solid fa-chalkboard-teacher"></i>
                Lý thuyết
              </a>
            </div>

            <div class="py-10 relative">
              ${uniqueLevels
                .map((lev, indexLevel) => {
                  return `
                    ${
                      indexLevel % 2 === 0
                        ? `
                          <div class="w-20 ml-[-32px]">
                            <a href="./test/index.html?unit=${
                              index + 1
                            }&level=${indexLevel + 1}" ${
                            !(parseInt(infoUser.tienDo.capDo, 10) >= index + 1)
                              ? // lev.state === "lock"
                                'style="pointer-events: none;"'
                              : parseInt(infoUser.tienDo.capDo, 10) ==
                                  index + 1 &&
                                infoUser.tienDo.level < indexLevel + 1
                              ? 'style="pointer-events: none;"'
                              : ""
                          }>
                              <img
                                class="w-full animate__animated opacity-0 ob_zoomIn"
                                src="../public/assets/img/${
                                  parseInt(infoUser.tienDo.capDo, 10) >
                                  index + 1
                                    ? "star.png"
                                    : infoUser.tienDo.level >= indexLevel + 1 &&
                                      parseInt(infoUser.tienDo.capDo, 10) ===
                                        index + 1
                                    ? "star.png"
                                    : "black_star.png"
                                }"
                                alt="star"
                              />
                            </a>
                          </div>
                          ${
                            indexLevel + 1 != uniqueLevels.length
                              ? `
                            <div class="w-32 rotate-12">
                              <img
                                class="w-full animate__animated opacity-0 ob_zoomIn"
                                src="../public/assets/img/black_path.png"
                                alt="black_path"
                              />
                            </div>
                            `
                              : ``
                          }
                        `
                        : `
                          <div class="w-20 ml-[32px]">
                            <a href="./test/index.html?unit=${
                              index + 1
                            }&level=${indexLevel + 1}" ${
                            !(parseInt(infoUser.tienDo.capDo, 10) >= index + 1)
                              ? // lev.state === "lock"
                                'style="pointer-events: none;"'
                              : parseInt(infoUser.tienDo.capDo, 10) ==
                                  index + 1 &&
                                infoUser.tienDo.level < indexLevel + 1
                              ? 'style="pointer-events: none;"'
                              : ""
                          }>
                              <img
                                class="w-full animate__animated opacity-0 ob_zoomIn"
                                src="../public/assets/img/${
                                  parseInt(infoUser.tienDo.capDo, 10) >
                                  index + 1
                                    ? "star.png"
                                    : infoUser.tienDo.level >= indexLevel + 1 &&
                                      parseInt(infoUser.tienDo.capDo, 10) ===
                                        index + 1
                                    ? "star.png"
                                    : "black_star.png"
                                }"
                                alt="star"
                              />
                            </a>
                          </div>
                          ${
                            indexLevel + 1 != uniqueLevels.length
                              ? `
                              <div class="w-32 -scale-x-100 ml-[-30px] rotate-[-5deg]">
                                <a href="./test/index.html?unit=${
                                  index + 1
                                }&level=${indexLevel + 1}" ${
                                  !(
                                    parseInt(infoUser.tienDo.capDo, 10) >=
                                    index + 1
                                  )
                                    ? // lev.state === "lock"
                                      'style="pointer-events: none;"'
                                    : parseInt(infoUser.tienDo.capDo, 10) ==
                                        index + 1 &&
                                      infoUser.tienDo.level < indexLevel + 1
                                    ? 'style="pointer-events: none;"'
                                    : ""
                                }>
                                  <img
                                    class="w-full animate__animated ob_zoomIn"
                                    src="../public/assets/img/black_path.png"
                                    alt="black_path"
                                  />
                                </a>
                              </div>
                            `
                              : ``
                          }
                        `
                    }
                  `;
                })
                .join("")}
            </div>
            <div class="animate__animated opacity-0 ob_bounceIn w-16 ${
              parseInt(infoUser.tienDo.capDo, 10) >= index + 1
                ? "cursor-pointer"
                : ""
            } absolute sm:right-10 right-3 bottom-10 shadow-lg ">            
              <div
                class="animate__animated animate__pulse ${
                  index + 1 <= parseInt(infoUser.tienDo.capDo, 10)
                    ? "animate__infinite"
                    : ""
                }"
              >
                <img 
                  index="${index}"
                  modal="caiRuong"
                  class="w-full"
                  src="../public/assets/img/box.svg"
                  alt="ruong"
                  loiChuc="${loichucArray[index].loiChuc}"
                />
              </div>
            </div>
          </div>
  `;
    })
    .join("");

  if (unitEl) unitEl.innerHTML = htmlUnitEl;
};

main();

document.addEventListener("click", (e) => {
  if (e.target && e.target.getAttribute("modal") === "caiRuong") {
    if (
      parseInt(e.target.getAttribute("index"), 10) + 1 >
      parseInt(infoUser.tienDo.capDo, 10)
    )
      return;
    Swal.fire({
      title: "Chúc mừng bạn đã thăng cấp!",
      text: e.target.getAttribute("loiChuc"),
      icon: "success",
      confirmButtonText: "OK",
    });
  }
});

export const nextLevel = (a, b) => {
  const unit = a - 1; // 0
  const level = b - 1; // 2
  if (level === units[unit].levels.length) {
    units[unit + 1].levels[0].state = "unlock";
  } else {
    units[unit].levels[level].state = "unlock";
  }

  localStorage.setItem("units", JSON.stringify(units));
  console.log(units);
};
