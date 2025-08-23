import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import ms from 'ms';

export type JwtUserPayload = {
    id: string;
    role: 'admin' | 'user';
};

export const addAccessToken = (res: Response, payload: JwtUserPayload) => {
    // Generate JWT token
    const token = jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, { expiresIn: '1d' });

    // Set JWT token in an HTTP-only cookie
    res.cookie('accessToken', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: ms('1d'),
    });
};


declare global {
    interface UserPayload {
        id: Types.ObjectId;
        role: 'admin' | 'user';
    }

    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const jwtParser = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        let token = req.cookies.accessToken as string | undefined;

        if (token) {
            if (!process.env.JWT_SECRET) {
                console.error('JWT_SECRET is not defined');
                res.sendStatus(500);
                return;
            }

            try {
                const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtUserPayload;

                req.user = Object.freeze({
                    id: new Types.ObjectId(payload.id),
                    role: payload.role,
                });
            } catch (error) {
                res.send(500).json({
                    success: false,
                    errorMessage: `Token verification failed: ${error instanceof Error ? error.message : String(error)}`
                });
            }
        }

        next();
    }
}

export const authorize = (...allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            res.sendStatus(401);
            return;
        }

        if (!allowedRoles.includes(req.user.role)) {
            res.sendStatus(403);
            return;
        }

        next();
    };
};

export const adminOnly = authorize('admin');
export const userOnly = authorize('user');
