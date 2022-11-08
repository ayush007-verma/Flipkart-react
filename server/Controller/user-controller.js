import User from "../model/userSchema.js";

export const userSignup = async (request ,response) => {
    try{

        // const exist = await User.findOne ({ username : request.body.username })

        // if(exist){
        //     return response.status(401).json({ message : 'Username already exists '})
        // }
        // console.log(request.body);
        const user = request.body
        const newUser = new User(user)
        await newUser.save()

        response.status(200).json({ message : user})
        return newUser
    }
    catch(err){
        console.log('error while sending request in userSignUp user-controller.js')
        response.status(500).json({ message : err.message })
    }
}