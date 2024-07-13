import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginService } from "../Service/AuthService";
import "../saas/components/_login_box.scss";


const LoginBox = ({ showBox,setShowBox }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  // const [login, setLogin] = useState(showBox.showLogin);
  // const [forgotPassword, setForgotPassword] = useState(showBox.showForgotPassword);
  // const [otpCode, setOtpCode] = useState(showBox.showOtpCode);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const renderLoginBox = ()=>{
    setEmail("");
    setPassword("");
    setOtp("");
    setShowBox({
      ...showBox,
      showLogin:true,
      showForgotPassword:false,
      showOtpCode:false,
    });
  }

  const renderForgotPassword = () => {
    setEmail("");
    setPassword("");
    setOtp("");
    setShowBox({
      ...showBox,
      showLogin:false,
      showForgotPassword:true,
      showOtpCode:false,
    })
  };

  const renderOtpCode = () => {
    setEmail("");
    setPassword("");
    setOtp("");
    setShowBox({
      ...showBox,
      showLogin:false,
      showForgotPassword:false,
      showOtpCode:true,
    })
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(loginService({ email, password }));
  };

  if (showBox.showLogin == true) {
    return (
      <>
        <div className="login-box">
          <h3>Login</h3>
          <form onSubmit={submitLogin}>
          <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
          <button type="submit" className="login-btn">Login</button>
          <a className="forgot-password-link" onClick={renderForgotPassword}>Forgot Password?</a>
          </form>
        </div>
      </>
    );
  }
  if (showBox.showForgotPassword == true) {
    return (
      <>
        <div className="login-box">
          <h5>Send a code to the below email</h5>
          <form>
          <input type="email" placeholder="Email" />
          <button type="submit" className="forgotPassword-btn" onClick={renderOtpCode}>Send OTP</button>
          <button className="forgotPassword-btn" onClick={renderLoginBox}>Back</button>
          </form>
        </div>
      </>
    );
  }

  if (showBox.showOtpCode == true) {
    return (
      <>
        <div className="login-box">
          <h5>Please type the OTP code sent to your email</h5>
          <form>
          <input type="text" placeholder="OTP Code" />
          <button type="submit" className="otp-btn">Submit</button>
          <button className="otp-btn" onClick={renderForgotPassword}>Back</button>
          </form>
        </div>
      </>
    );
  }
};

export default LoginBox;
