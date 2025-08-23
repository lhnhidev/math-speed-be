import { Router } from "express";
import {
  createTestAttempt,
  listTestAttempts,
  submitTestAttempt,
  addTestAttemptForUser,
  getTestAttempt,
  getTestAttemptById,
} from "../controllers/test-attempt.controller";
import { userOnly } from "../middleware/auth.middleware";

const router = Router();
// router.use(userOnly);

router.route("/:id").get(getTestAttempt);
router.route("/getById/:id").get(getTestAttemptById);
router.route("/").get(listTestAttempts).post(createTestAttempt);
router.route("/addForUser").post(addTestAttemptForUser);
router.route("/:id").post(submitTestAttempt);

export default router;
