import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const TOKEN_SECRET = crypto.randomBytes(32).toString('hex');
// console.log('TOKEN_SECRET', TOKEN_SECRET);

const createJWT = (email, userId, duration) => {
   const payload = {
      email,
      userId,
      duration
   };
   return jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: duration,
   });
};
export default createJWT