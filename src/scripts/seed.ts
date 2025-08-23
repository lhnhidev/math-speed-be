import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Question from '../models/Question.js';
import TestAttempt from '../models/TestAttempt.js';
import Subject from '../models/Subject.js';
import { readFileSync } from 'node:fs';
import { Types } from 'mongoose';

type QuestionData = {
    [key: string]: {
        name: string;
        levels: {
            [level: string]: {
                questions: {
                    question: string;
                    answers: string[];
                    explain: string;
                }[];
            };
        };
    };
};

const seedData = async () => {
    try {
        await connectDB();

        console.log('🌱 Starting database seeding...');

        // Clear existing data
        await Promise.all([
            User.deleteMany({}),
            Question.deleteMany({}),
            TestAttempt.deleteMany({}),
            Subject.deleteMany({}),
        ]);

        const questionData: QuestionData = JSON.parse(readFileSync('src/scripts/questions.json', 'utf-8'));
        const subjects = [...Object.entries(questionData)].map(([key, subject]) => ({
            index: parseInt(key),
            ten: subject.name,
        }));

        const subjectDocs = await Subject.insertMany(subjects);

        const questions = [...Object.entries(questionData)].flatMap(([subjectId, subject]) => [...Object.entries(subject.levels)].flatMap(([level, levelData]) =>
            levelData.questions.map(question => ({
                chuDe: {
                    chuDe: subjectDocs[parseInt(subjectId) - 1]._id,
                    level,
                },
                cauHoi: question.question,
                luaChon: question.answers.map((answer, index) => ({
                    index,
                    noiDung: answer,
                    dapAn: index === 0,
                })),
                giaiThich: question.explain,
            }))
        ));

        await Promise.all([
            User.create([{ username: 'admin', password: 'password', role: 'admin' }]),
            Question.insertMany(questions),
        ]);

        // await User.create([{ username: 'admin', password: 'password', role: 'admin' }]);
        // await Subject.insertMany(subjects);
        // await Question.insertMany(questions);


        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedData();
