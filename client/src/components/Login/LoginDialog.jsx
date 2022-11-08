import { useState ,useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { authSignUp } from '../../Services/api'
import { DataContext } from '../../Context/DataProvider'

const DialogWrapper = styled(Box)`
    height : 70vh;
    width : 90vh;
`

const DialogImg = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height : 85%;
    width : 28%;
    padding : 45px 35px;
    & > p ,& > h5 {
        color : #fff;
        font-weight : 600;
    }
`

const LoginWrapper = styled(Box)`
    display : flex;
    flex-direction : column;
    padding :25px 35px;
    flex : 1;

    & > div ,& > button {
        margin-top : 20px
    }
`
const LoginButton = styled(Button)`
    text-transform : none;
    background: #FB641B;
    color : #fff;
    height : 48px;
    border-radius : 2px;
`

const RequestOtpButton = styled(Button)`
    text-transform : none;
    background: #fff;
    color : #2874f0;
    height : 48px;
    border-radius : 2px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const Text = styled(Typography)`
    font-size : 12px;
    color : #878787;
    margin-top : 10px;
`

const CreateAccount = styled(Typography)`
    font-size : 14px;
    text-align : center;
    color : #2874f0;
    font-weight : 600;
    cursor : pointer;
    margin-top : 70px;
`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: `Login`,
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}



const signUpInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    phone: ''
}

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login)

    const [signup, setSignUp] = useState()
    
    const  { setAccount }  = useContext(DataContext)

    const onInputChange = (e) => {
        setSignUp({ ...signup, [e.target.name]: e.target.value })
        console.log(signup)
    }

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }

    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const signupUser = async () => {  
       let response =  await authSignUp(signup)
       if(!response) return;
       console.log('response -> ' ,response)
       handleClose();
       setAccount(signup.userName)
       console.log(response);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <DialogWrapper>
                <Box style={{ display: "flex", height: "100%" }}>
                    <DialogImg>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {account.subHeading}
                        </Typography>
                    </DialogImg>
                    {(account.view === 'login')
                        ?
                        <LoginWrapper>
                            <TextField variant="standard" label="Enter Email/Mobile Number" />
                            <TextField variant="standard" label="Enter Password" />
                            <Text>
                                By continuing, you agree to Flipkart's Terms of
                                Use and Privacy Policy.
                            </Text>
                            <LoginButton> Login </LoginButton>
                            <Typography style={{ textAlign: "center" }}> OR </Typography>
                            <RequestOtpButton> Request OTP </RequestOtpButton>
                            <CreateAccount onClick={() => toggleSignUp()}> New to Flipkart? Create an account </CreateAccount>
                        </LoginWrapper>
                        :
                        <LoginWrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstName' label="Enter First Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastName' label="Enter Last Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='userName' label="Enter username" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone" />
                            <LoginButton onClick={()=> signupUser()}> Continue; </LoginButton>
                        </LoginWrapper>
                    }
                </Box>
            </DialogWrapper>
        </Dialog>
    )
}

export default LoginDialog