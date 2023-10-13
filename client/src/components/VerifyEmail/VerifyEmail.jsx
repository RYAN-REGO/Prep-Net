import React, { useState } from 'react';
import OtpInput from "react-otp-input";
import './VerifyEmail.css';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router';
import { signup } from '../../actions/auth';

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const signUpData = useSelector((state) => state.auth.signUpData);
    const navigate = useNavigate();

    const handleVerifyAndSignup = (e) => {
        e.preventDefault();

        const {
          firstName,
          lastName,
          email,
          password,  
        } = signUpData || {};
        
        const finalData = {
          firstName,
          lastName,
          email,
          password,
          otp
        }
        dispatch(
            signup(
                finalData,
                navigate
            )
        )
    }

  return (
    <div className='verify_greatContainer'>
        <div className="verify_header">
            <div className="verify_head">Verify Email</div>
            <div className="verify_tip">A verification code has been sent to your email inbox. Enter the code below.</div>
            <div className="verify_alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="m12.865 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-1.866 13v2h2v-2h-2Zm0-7v5h2V9h-2Z"/></svg>&nbsp;<b>TIP :</b> If you are facing any problem while signing up you can always sign in using your <a href='/auth' style={{color : 'blue'}}>Google Account</a></div>
        </div>
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} 
      placeholder="-"
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        height : '40px',
        width : '40px',
        fontSize : '20px',
        textAlign : 'center',
        border : 'none',
        borderRadius : '4px'
      }}
      />}
      containerStyle={{
        justifyContent: "space-between",
        gap: "0 6px",
        marginBottom : '30px',
        position : 'relative',
        top : '50px'
      }}
    />
    <button className="verify_submit" onClick={handleVerifyAndSignup}>Verify Email</button>
    <div className="verify_alert" id='verify_spam_alert'>Make sure to check spam <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.935 2.501L21.5 8.066v7.87l-5.565 5.565h-7.87L2.5 15.936v-7.87l5.565-5.565h7.87Zm-.828 2H8.893L4.5 8.894v6.214L8.893 19.5h6.214l4.393-4.393V8.894l-4.393-4.393Zm-4.108 10.5h2v2h-2v-2Zm0-8h2v6h-2V7Z"/></svg> folder if not found in inbox !!</div>
    </div>
  )
}

export default VerifyEmail
