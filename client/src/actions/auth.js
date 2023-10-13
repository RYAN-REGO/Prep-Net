import * as api from '../api';
import { toast } from "react-hot-toast"


export const signin = (formData, navigate) => async(dispatch) => {
    const toastId = toast.loading("Loading..")
    try {
        //login the user
        const response = await api.signIn(formData);
        console.log(response);

        const {result, token} = response.data;
        const data = {result, token};

        if(!response.data.success)
        {
            throw new Error(response.data.message);
        }
        toast.success("Login Successful 🎉");
        dispatch({type : 'AUTH', data});

        navigate('/');
    }
    catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);

}
//the component interacts with the action controller directly which in turn takes the help of an api call 
//we need to give the api the props needed to make the api call and the action controllers res is the response that the api gets which is also fetched by the action controller front end

export const signup = (finalData, navigate) => async(dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
        //sign up the user
        const response = await api.signUp(finalData);

        //if error occurs
        if(!response.data.success)
        {
            throw new Error(response.data.message);
        }
        const {result, token} = response.data;
        const data = {result, token};
        toast.success("Sign Up Successful 🎉")
        dispatch({type : 'AUTH', data});

        navigate('/');
    } 
    catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        navigate('/auth');
    }
    toast.dismiss(toastId);
}

export const sendOtp = (formData, navigate) => async(dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch({type : 'START_LOADING'});
    try{
        const response = await api.sendOTP(formData);

        console.log("sendOTP API response", response);
        console.log(response.data.success);
        toast.success("OTP sent successfully")
        if(!response.data.success)
        {
            throw new Error(response.data.message)
        }
        navigate('/verify-email');
        //OTP sent successfully
        //now direct to fill the received otp
        
    }
    catch(error){
        console.log("SENDOTP error...", error);
        toast.error(error.response.data.message)
    }
    dispatch({type : 'END_LOADING'});
    toast.dismiss(toastId);
}

