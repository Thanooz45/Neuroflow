# NeuroFlow AI

> An intelligent workspace for turning documents into organised, actionable knowledge.

[Explore the live application](https://neuroflow-ai-bay.vercel.app/) · [Check API status](https://neuroflow-gl8v.onrender.com/api/health)

NeuroFlow helps individuals and teams collect documents, organise them into workspaces, and surface useful insights through focused AI-assisted workflows. It provides a streamlined environment for researching, reviewing, and working with information without losing context.

## Highlights

- Secure account registration and authentication
- Personal workspaces for organising projects and documents
- Support for TXT, PDF, DOCX, CSV, and image uploads
- Document text extraction, summaries, and metadata
- AI-assisted workflows grounded in your uploaded content
- Searchable knowledge base with MongoDB persistence
- Responsive React interface designed for focused work

## Live application

Visit **[neuroflow-ai-bay.vercel.app](https://neuroflow-ai-bay.vercel.app/)** to use NeuroFlow.

The API is hosted separately and its health endpoint is available at [neuroflow-gl8v.onrender.com/api/health](https://neuroflow-gl8v.onrender.com/api/health).

## Technology

| Area | Tools |
| --- | --- |
| Frontend | React, Vite, React Router, Zustand, TanStack Query |
| Backend | Node.js, Express, JWT |
| Database | MongoDB with Mongoose |
| Document processing | Multer, Mammoth, pdf-parse, Sharp, Tesseract.js |
| Deployment | Vercel (frontend) and Render (API) |

## Run locally

```bash
npm install
npm --prefix server install
npm --prefix client install
```

Create `server/.env` from `server/.env.example`, provide a secure `JWT_SECRET`, then start both applications:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project structure

```text
client/      # React and Vite frontend
server/      # Express API and document-processing services
render.yaml  # Render deployment configuration
vercel.json  # Vercel routing configuration
```

## License

This project is intended for educational and portfolio use.
