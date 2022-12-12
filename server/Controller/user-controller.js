import User from "../model/userSchema.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
dotenv.config();

import jwt from 'jsonwebtoken';

import createJWT from "../utils/auth.js";

export const userSignup = async (request ,response) => {
    try{
        const user = request.body;
        const newUser = new User(user);
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) throw err;
                newUser.password = hash;
                console.log(newUser);
                let access_token = createJWT(newUser.email, newUser._id, 3600);

                jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded)=>{
                    if(err) {
                        response.status(500).json({error: err});
                    }
                    if(decoded) {
                        response.status(200).json({
                            success: true,
                            token: access_token,
                            message: newUser
                        })
                    }
                })
                
                newUser.save()
                    .then(res => {
                        console.log(res);
                        response.status(200).json({
                            success: true,
                            result: res
                        })
                    })
                    .catch(err => {
                        response.status(500).json({
                            errors: [{ error: err }]
                        });
                    });
            });
        });
    }
    catch(err){
        console.log('error while sending request in userSignUp user-controller.js ...')
        response.status(500).json({ message : err.message })
    }
}

export const userLogin = async (req, res) => {
    try {
let { password, username } = req.body;
    let abc = await User.findOne({ username: username })
        if (!abc) {
            console.log('cond 1');
            return res.status(404).json({
                errors: [{ user: "not found" }],
            });
        } else {
            console.log('cond 2', abc);
            let isMatch = await bcrypt.compare(password, abc.password)

                if (!isMatch) {
                console.log('cond 3');
                    return res.status(400).json({
                        errors: [{
                            password:
                                "incorrect"
                        }]
                    });
                }
                let access_token = createJWT(
                    abc.email,
                    abc._id,
                    3600
                );
                jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
                    decoded) => {
                    if (err) {
                console.log('cond 4');
                        res.status(500).json({ erros: err });
                    }
                    if (decoded) {
                console.log('cond 5');
                        return res.status(200).json({
                            success: true,
                            token: access_token,
                            message: abc
                        });
                    }
                });
        }
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}