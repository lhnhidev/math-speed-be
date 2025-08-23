import { GET_CAU_HOI } from "../api.js";
import main from "./index.js";

const notyf = new Notyf();

document.addEventListener("click", async (e) => {
  if (e.target && e.target.id === "deleteQuestion") {
    const deleteQuestion = e.target;
    const id = deleteQuestion.getAttribute("cauHoi");

    const confirmDelete = confirm("Bạn có muốn xóa câu hỏi này không?");

    if (confirmDelete === false) {
      return;
    }

    await fetch(`${GET_CAU_HOI}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    notyf.success("Đã xóa thành công");
    await main();
  }
});
