import jwt from 'jsonwebtoken';
import { httpError,asyncHandler } from '../utils/core.js';
export const auth=asyncHandler(async(req,_res,next)=>{const token=req.headers.authorization?.replace('Bearer ','');if(!token)throw httpError(401,'Authentication required');try{req.user=jwt.verify(token,process.env.JWT_SECRET||'development-secret').user;next()}catch{throw httpError(401,'Invalid or expired token')}});
