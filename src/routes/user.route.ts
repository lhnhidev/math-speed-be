import { Router } from "express";
import {
  addUser,
  loginUser,
  getUser,
  changeProcessUser,
} from "../controllers/user.controller";

const router = Router();

router.route("/").post(addUser);
router.route("/login").post(loginUser);
router.route("/logout").post((_req, res) => {
  res.status(200).json({ message: "User logged out successfully" });
  res.clearCookie("accessToken");
});
router.route("/:idUser").get(getUser);
router.route("/:idUser").patch(changeProcessUser);

export default router;
