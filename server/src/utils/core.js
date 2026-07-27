export const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
export const httpError = (status, message) => Object.assign(new Error(message), { status });
export const id = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
export const sanitize = (value = '') => String(value).replace(/\s+/g, ' ').trim();
