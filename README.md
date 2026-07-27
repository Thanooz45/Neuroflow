# NeuroFlow AI

Agentic document intelligence workspace with a React/Vite frontend and Express API. It can run entirely in memory without MongoDB or Ollama; MongoDB Atlas persists data and Ollama adds local embeddings.

## Local start

1. Copy `server/.env.example` to `server/.env` and set a secure `JWT_SECRET`.
2. Run `npm install`, then `npm --prefix server install` and `npm --prefix client install`.
3. Run `npm run dev` and open `http://localhost:5173`.

Demo login: `demo@neuroflow.ai` / `Password@123`.

See `steps.txt` for complete Vercel, Render, and MongoDB Atlas deployment instructions.
