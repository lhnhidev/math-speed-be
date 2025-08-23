# Math Speed Backend

A high-performance Express.js backend built with TypeScript, Mongoose, and Bun for a math speed game application.

## Features

- ⚡ **Bun Runtime** - Ultra-fast JavaScript runtime and package manager
- 🔷 **TypeScript** - Type-safe development with strict compiler options
- 🚀 **Express.js** - Fast, unopinionated web framework
- 🍃 **MongoDB/Mongoose** - NoSQL database with elegant object modeling
- 🛡️ **Security** - Helmet, CORS, and input validation
- 📊 **User Management** - CRUD operations and leaderboard system
- 🔧 **Development Ready** - Hot reload, error handling, and structured architecture

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed on your system
- MongoDB running locally or a MongoDB connection string

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd math-speed-backend
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` file with your configuration:
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/math-speed-backend
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
CORS_ORIGIN=http://localhost:3000
```

4. Start the development server:
```bash
bun run dev
```

The server will start on `http://localhost:3000` with hot reload enabled.

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build the project for production
- `bun start` - Start the production server
- `bun run type-check` - Run TypeScript type checking

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Users
- `GET /api/users` - Get all users (paginated)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/leaderboard` - Get top users by score

### Example API Usage

**Create a user:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "player1",
    "email": "player1@example.com",
    "password": "password123"
  }'
```

**Get leaderboard:**
```bash
curl http://localhost:3000/api/users/leaderboard?limit=10
```

## Project Structure

```
src/
├── controllers/        # Route handlers and business logic
│   └── userController.ts
├── middleware/         # Custom middleware functions
│   ├── errorHandler.ts
│   └── notFound.ts
├── models/            # Mongoose schemas and models
│   └── User.ts
├── routes/            # Express route definitions
│   └── userRoutes.ts
└── index.ts           # Application entry point
```

## Database Schema

### User Model
```typescript
{
  username: string;     // Unique, 3-20 characters
  email: string;        // Unique, valid email format
  password: string;     // Minimum 6 characters
  score: number;        // Default: 0, non-negative
  level: number;        // Default: 1, minimum 1
  createdAt: Date;      // Auto-generated
  updatedAt: Date;      // Auto-generated
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/math-speed-backend` |
| `JWT_SECRET` | JWT signing secret | Required |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |

## Error Handling

The application includes comprehensive error handling:

- **Global Error Handler** - Catches and formats all errors
- **404 Handler** - Handles unknown routes
- **Validation Errors** - MongoDB validation errors
- **Cast Errors** - Invalid ObjectId errors
- **Duplicate Key Errors** - Unique constraint violations

## Security Features

- **Helmet** - Sets security-related HTTP headers
- **CORS** - Configurable cross-origin resource sharing
- **Input Validation** - Mongoose schema validation
- **Error Information** - Limited error details in production

## Development

### Type Checking
The project uses strict TypeScript configuration for better code quality:
```bash
bun run type-check
```

### Hot Reload
Development server automatically restarts on file changes:
```bash
bun run dev
```

## Production Deployment

1. Build the project:
```bash
bun run build
```

2. Set production environment variables
3. Start the production server:
```bash
bun start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking and tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details
