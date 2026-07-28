# NeuroFlow AI

> A secure document-intelligence workspace that turns scattered source files into focused, usable knowledge.

[Live application](https://neuroflow-ai-bay.vercel.app/) · [API health](https://neuroflow-gl8v.onrender.com/api/health)

## Overview

NeuroFlow is a full-stack application for individuals and teams who work with document-heavy projects. Users create private workspaces, upload reference material, and use targeted workflows to ask grounded questions, generate summaries, prepare research briefs, identify meeting action items, and compare documents.

The product keeps source context close to every result. Files are extracted and processed in the background; each workflow retrieves relevant document content and returns readable output with citations and an execution trace.

## Live demo

Try the deployed application at **[neuroflow-ai-bay.vercel.app](https://neuroflow-ai-bay.vercel.app/)**. The React frontend is deployed on Vercel and communicates with an Express API deployed on Render.

## Key capabilities

- Secure registration and JWT-protected sign-in
- Clear, in-progress feedback during sign-in and account creation
- Private workspaces for organising projects and source files
- PDF, DOCX, TXT, Markdown, CSV, PNG, JPG, JPEG, and WEBP uploads
- Background text extraction, chunking, and document metadata processing
- Grounded question answering with document citations
- Summary, research-brief, meeting-action-item, and document-comparison workflows
- Workflow history, confidence evaluation, and execution trace
- Responsive React interface built for focused work

## Benefits

| Benefit | How NeuroFlow delivers it |
| --- | --- |
| Faster knowledge discovery | Retrieves relevant text from uploaded files, reducing manual document review. |
| Better project organisation | Groups documents, workflow outputs, and activity within dedicated workspaces. |
| More trustworthy outputs | Shows supporting citations and a workflow trace beside results. |
| Less repetitive analysis | Offers ready-made workflows for research, summaries, comparisons, and meeting follow-ups. |
| Privacy-aware access | Uses authenticated, user-scoped API routes to isolate workspace data. |

## Technology stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, Vite, React Router, TanStack Query, Zustand, Axios, Lucide React |
| Backend | Node.js, Express, JWT, bcryptjs, CORS |
| Database | MongoDB with Mongoose |
| Document processing | Multer, Mammoth, pdf-parse, csv-parse, Sharp, Tesseract.js |
| Workflows | Document chunk retrieval, embeddings/similarity scoring, structured grounded outputs |
| Deployment | Vercel (frontend) and Render (API) |

## Basic architecture

```text
React client (Vercel)
  ├─ Authentication and workspace UI
  ├─ TanStack Query server state
  └─ Zustand persisted session state
            │ HTTPS / JWT
            ▼
Express API (Render)
  ├─ Authentication and user-scoped routes
  ├─ Upload and document-ingestion pipeline
  └─ Grounded workflow and retrieval services
            │
            ▼
MongoDB
  └─ Users, workspaces, documents, chunks, chats, and workflow runs
```

## Project structure

```text
client/
  src/
    main.jsx          # Routes, pages, API client, and UI state
    index.css          # Application styling
server/
  src/
    app.js             # Express routes and middleware
    config/            # Repository and persistence configuration
    middleware/        # JWT authentication
    models/            # MongoDB models
    services/          # Ingestion, retrieval, AI, and workflow logic
    utils/             # Shared server helpers
render.yaml            # Render deployment configuration
vercel.json            # Vercel client routing configuration
```

## Run locally

### Prerequisites

- Node.js 18 or later
- A MongoDB connection string

Install dependencies:

```bash
npm install
npm --prefix server install
npm --prefix client install
```

Create `server/.env` with the required values:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=use_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Start the client and API:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Authentication experience

The sign-in and account-creation pages disable controls while a request is processing, show a spinner, and announce clear status text such as **“Signing in…”** and **“Authenticating your secure session. Please wait…”**. This prevents duplicate submissions and makes the transition into a workspace clear.


