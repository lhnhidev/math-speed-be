import { GET_TEST_ATTEMP } from "../api.js";
import { getTime } from "./getTime.js";

const startBtn = document.querySelector("#startExamBtn");

const submitData = () => {
  if (getTime() === null) {
    const notyf = new Notyf();
    notyf.error("Vui lòng chọn thời gian làm bài thi");
    return;
  }
  window.location.href = `contest/index.html?time=${encodeURIComponent(
    getTime()
  )}`;
};

startBtn?.addEventListener("click", () => {
  submitData();
});

const history = document.querySelector("#history");

const handleDate = (dat) => {
  const date = new Date(dat);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const renderHistoryTable = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  const testAttempt = await fetch(`${GET_TEST_ATTEMP}${token}`).then((res) =>
    res.json()
  );

  history.innerHTML = testAttempt
    .map((item) => {
      return `
      <tr>
        <td class="py-3 px-4">${handleDate(item.ngayBatDauThi)}</td>
        <td class="py-3 px-4 font-medium text-green-600">
          ${item.diem}/${item.luaChon.length}
        </td>
        <td class="py-3 px-4">${item.thoiGianLamBai} phút</td>
        <td class="py-3 px-4">
          <a 
            href="./history-exams/index.html?id=${item._id}"
            class="text-[#354764] hover:text-[var(--primary-color)] transition-all" id="${
              item._id
            }">
            <i class="fas fa-eye mr-1"></i> Xem
          </a>
        </td>
      </tr>
    `;
    })
    .join("");

  document.querySelector("#lanThi").innerHTML = testAttempt.length || 0;

  let diem = 0;
  testAttempt.forEach((item) => (diem += item.diem));
  document.querySelector("#trungBinh").innerHTML = (
    diem / (testAttempt.length || 1)
  ).toFixed(3);

  let diemCaoNhat = -1;
  testAttempt.forEach((item) => {
    diemCaoNhat = Math.max(item.diem, diemCaoNhat);
  });
  document.querySelector("#caoNhat").innerHTML =
    diemCaoNhat === -1 ? 0 : diemCaoNhat;
};

renderHistoryTable();
