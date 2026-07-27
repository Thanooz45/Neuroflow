import mongoose from 'mongoose';
const make = (fields) => new mongoose.Schema(fields, { timestamps: true, versionKey: false });
const definitions = {
  users: ['User', { name: String, email: { type: String, unique: true }, password: String }],
  workspaces: ['Workspace', { userId: String, name: String, description: String, color: String }],
  documents: ['Document', { userId: String, workspaceId: String, originalName: String, storedName: String, mimeType: String, size: Number, fileType: String, status: String, extractedText: String, summary: String, pageCount: Number, metadata: Object, processingError: String }],
  document_chunks: ['DocumentChunk', { userId: String, workspaceId: String, documentId: String, chunkIndex: Number, text: String, tokenCountApprox: Number, embedding: [Number], metadata: Object }],
  chat_threads: ['ChatThread', { userId: String, workspaceId: String, title: String }],
  chat_messages: ['ChatMessage', { userId: String, workspaceId: String, threadId: String, role: String, content: String, citations: [Object] }],
  workflow_runs: ['WorkflowRun', { userId: String, workspaceId: String, type: String, status: String, title: String, input: Object, output: Object, citations: [Object], evaluation: Object, trace: [Object] }]
};
export const mongoModels = Object.fromEntries(Object.entries(definitions).map(([key,[name,fields]]) => [key, mongoose.models[name] || mongoose.model(name, make(fields))]));
