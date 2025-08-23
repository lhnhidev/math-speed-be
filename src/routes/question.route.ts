import { Router } from "express";
import {
  addQuestion,
  deleteQuestion,
  listQuestions,
  updateQuestion,
  getQuestion,
} from "../controllers/question.controller";
import { adminOnly } from "../middleware/auth.middleware";

const router = Router();
// router.use(adminOnly); // Apply adminOnly middleware to all routes in this router

router.route("/").get(listQuestions).post(addQuestion);
router
  .route("/:id")
  .put(updateQuestion)
  .delete(deleteQuestion)
  .get(getQuestion);

export default router;
