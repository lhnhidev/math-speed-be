import { Request, Response } from "express";
import TestAttemptService from "../services/test-attempt.service";
import { Types } from "mongoose";

export const listTestAttempts = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;
    const attempts = await TestAttemptService.listTestAttempts(userId);
    res.status(200).json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving test attempts", error });
  }
};

export const getTestAttempt = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const attempts = await TestAttemptService.getTestAttempt(userId);
    res.status(200).json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Error getting test attempts", error });
  }
};

export const getTestAttemptById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const at = await TestAttemptService.getTestAttemptById(id);
    res.status(200).json(at);
  } catch (error) {
    res.status(500).json({ message: "Error getting test attempts", error });
  }
};

export const createTestAttempt = async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;
    const newAttempt = await TestAttemptService.createTestAttempt(userId);
    res.status(201).json(newAttempt);
  } catch (error) {
    res.status(500).json({ message: "Error creating test attempt", error });
  }
};

export const submitTestAttempt = async (req: Request, res: Response) => {
  try {
    const attemptId = req.params.id;
    const choices = req.body;
    await TestAttemptService.submitTestAttempt(
      new Types.ObjectId(attemptId),
      choices
    );
    res.status(200).json({ message: "Test attempt submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting test attempt", error });
  }
};

export const addTestAttemptForUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await TestAttemptService.addTestAttemptForUser(req.body);
    res.status(200).json({ message: "Test attempt added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding test attempt", error });
  }
};
