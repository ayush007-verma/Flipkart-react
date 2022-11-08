import axios from 'axios'

const URL = 'http://localhost:8000'

export const authSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup` ,data)
    }
    catch(err) {
        console.log('Error Occurred while calling SignUp API ',err);
    }
} 