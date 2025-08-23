import { Request, Response } from "express";
import { Types } from "mongoose";
import QuestionService from "../services/question.service";

export const listQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await QuestionService.listQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving questions", error });
  }
};

export const addQuestion = async (req: Request, res: Response) => {
  try {
    const newQuestion = await QuestionService.addQuestion(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Error adding question", error });
  }
};

export const getQuestion = async (req: Request, res: Response) => {
  try {
    const question = await QuestionService.getQuestion(
      new Types.ObjectId(req.params.id!)
    );
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Error get question", error });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedQuestion = await QuestionService.updateQuestion(
      new Types.ObjectId(req.params.id!),
      req.body
    );
    if (!updatedQuestion) {
      res.status(404).json({ message: "Question not found" });
      return;
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ message: "Error updating question", error });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const deletedQuestion = await QuestionService.deleteQuestion(
      new Types.ObjectId(req.params.id!)
    );
    if (!deletedQuestion) {
      res.status(404).json({ message: "Question not found" });
      return;
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting question", error });
  }
};

// export const addQuestionHandler: OperationHandler<"themCauHoi"> = async (c, _req: Request, res: Response) => {
//     const questionData = c.request.requestBody;
//     const newQuestion = await QuestionService.addQuestion(questionData);
//     return res.status(201).json(newQuestion);
// };

// export const updateQuestionHandler: OperationHandler<"capNhatCauHoi"> = async (c, _req: Request, res: Response) => {
//     const questionData = c.request.requestBody;
//     const updatedQuestion = await QuestionService.updateQuestion(c.request.params.questionId, questionData);
//     if (!updatedQuestion) {
//         return res.status(404).json({ message: 'Question not found' });
//     }
//     return res.status(200).json(updatedQuestion);
// };

// export const deleteQuestionHandler: OperationHandler<"xoaCauHoi"> = async (c, _req: Request, res: Response) => {
//     const deletedQuestion = await QuestionService.deleteQuestion(c.request.params.questionId);
//     if (!deletedQuestion) {
//         return res.status(404).json({ message: 'Question not found' });
//     }
//     return res.status(200).json({ message: 'Question deleted successfully' });
// };
