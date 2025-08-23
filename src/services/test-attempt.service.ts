import mongoose, { Types } from "mongoose";
import TestAttempt from "../models/TestAttempt";
import Question from "../models/Question";

const listTestAttempts = async (userId: Types.ObjectId) => {
  const attempts = await TestAttempt.find({ nguoiDung: userId })
    .populate<{
      luaChon: {
        cauHoi: mongoose.InferSchemaType<typeof Question.schema>;
        chon: Number | null;
      }[];
    }>("luaChon.cauHoi")
    .exec();
  return attempts.map((attempt) => ({
    ngayBatDauThi: attempt.ngayBatDauThi,
    thoiGianLamBai: attempt.thoiGianLamBai,
    soCau: attempt.luaChon.length,
    soCauDung: attempt.luaChon.reduce((count, choice) => {
      const question = choice.cauHoi;
      if (choice.chon === null) return count;

      return (
        count +
        (question.luaChon.some(
          (option) => option.dapAn && option.index === choice.chon
        )
          ? 1
          : 0)
      );
    }, 0),
  }));
};

const createTestAttempt = async (userId: Types.ObjectId) => {
  const totalQuestions = await Question.countDocuments();
  const questionsToSelect = Math.min(20, totalQuestions);

  const randomQuestions = await Question.aggregate([
    { $sample: { size: questionsToSelect } },
  ]);

  const testAttempt = new TestAttempt({
    nguoiDung: userId,
    luaChon: randomQuestions.map((question) => ({
      cauHoi: question._id,
    })),
  });

  return await testAttempt.save();
};

const submitTestAttempt = async (
  testAttemptId: Types.ObjectId,
  choices: Map<string, number | null>
) => {
  const testAttempt = await TestAttempt.findById(testAttemptId);
  if (!testAttempt) {
    throw new Error("Test attempt not found");
  }
  testAttempt.thoiGianLamBai = Math.floor(
    Date.now() - testAttempt.ngayBatDauThi.getDate() / (1000 * 60)
  );
  for (const [questionId, select] of choices.entries()) {
    const question = testAttempt.luaChon.find(
      (q) => q.cauHoi.toString() === questionId
    );
    if (question) {
      question.chon = select;
    }
  }
};

const addTestAttemptForUser = async (testAttemptData: any) => {
  const ta = new TestAttempt(testAttemptData);
  return await ta.save();
};

const getTestAttempt = async (id: any) => {
  const ta = await TestAttempt.find({ nguoiDung: id });
  return ta;
};

const getTestAttemptById = async (id: any) => {
  const ta = await TestAttempt.findById(id);
  return ta;
};

export default {
  listTestAttempts,
  createTestAttempt,
  submitTestAttempt,
  addTestAttemptForUser,
  getTestAttempt,
  getTestAttemptById,
};
