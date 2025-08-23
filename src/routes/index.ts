import { Application } from 'express';
import userRoutes from './user.route';
import questionRoutes from './question.route';
import testAttemptRoutes from './test-attempt.route';

export default function setupRoutes(app: Application) {
    app.use('/api/users', userRoutes);
    app.use('/api/cau-hoi', questionRoutes);
    app.use('/api/lich-su-lam-bai', testAttemptRoutes);
}