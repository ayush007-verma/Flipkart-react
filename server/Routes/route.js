import express from 'express'
import { getProducts } from '../Controller/product-controller.js';
import { userSignup, userLogin } from '../Controller/user-controller.js';
import User from '../model/userSchema.js';
const router = express.Router();

router.get('/signup', (req, res) => {
    User.find()
        .then(result => res.status(200).json( {message: 'All Products', users: result} ))
        .catch(error => res.status(500).json( {message: 'Server Error', err: error} ))
})

router.post('/signup' ,userSignup)

router.post('/login', userLogin)

router.get('/products', getProducts)

export default router;