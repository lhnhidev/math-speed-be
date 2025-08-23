import { Types } from "mongoose";
import Question from "../models/Question";
import { QuestionCreate, QuestionUpdate } from "../types/openapi";
import Subject from "../models/Subject";
import { InferSchemaType } from "mongoose";

const listQuestions = async () => {
  const questions = await Question.find();
  const subjects = await Subject.find({});
  const result: {
    tenChuDe: string;
    level: InferSchemaType<typeof Question.schema>[];
  }[] = [];

  subjects.forEach((subject) => {
    result.push({
      tenChuDe: subject.ten,
      level: questions.filter(
        (q) => q.chuDe.chuDe.toString() === subject._id.toString()
      ),
    });
  });

  return result;
};

const getQuestion = async (id: Types.ObjectId) => {
  console.log(id);
  const res = await Question.findOne({ _id: id });
  console.log(res);
  return res;
};

const addQuestion = async (questionData: QuestionCreate) => {
  const question = new Question(questionData);
  return await question.save();
};

const updateQuestion = async (
  id: Types.ObjectId,
  questionData: QuestionUpdate
) => {
  return await Question.findByIdAndUpdate(id, questionData, { new: true });
};

const deleteQuestion = async (id: Types.ObjectId) => {
  return await Question.findByIdAndDelete(id);
};

export default {
  listQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
};
