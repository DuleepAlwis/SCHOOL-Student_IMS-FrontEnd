import React, { useState } from "react";
import "../saas/components/_login_box.scss";

const LoginBox = ({ showLogin, showForgotPassword, showOtpCode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [login, setLogin] = useState(showLogin);
  const [forgotPassword, setForgotPassword] = useState(showForgotPassword);
  const [otpCode, setOtpCode] = useState(showOtpCode);

  const renderLoginBox = ()=>{
    setEmail("");
    setPassword("");
    setOtp("");
    setLogin(true);
    setForgotPassword(false);
    setOtpCode(false);
  }

  const renderForgotPassword = () => {
    setEmail("");
    setPassword("");
    setOtp("");
    setLogin(false);
    setForgotPassword(true);
    setOtpCode(false);
  };

  const renderOtpCode = () => {
    setEmail("");
    setPassword("");
    setOtp("");
    setLogin(false);
    setForgotPassword(false);
    setOtpCode(true);
  };

  if (login == true) {
    return (
      <>
        <div className="login-box">
          <h3>Login</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <a className="forgot-password-link" onClick={renderForgotPassword}>Forgot Password?</a>
        </div>
      </>
    );
  }
  if (forgotPassword == true) {
    return (
      <>
        <div className="login-box">
          <h5>Send a code to the below email</h5>
          <input type="email" placeholder="Email" />
          <button>Send OTP</button>
          <button onClick={renderLoginBox}>Back</button>
        </div>
      </>
    );
  }

  if (otpCode == true) {
    return (
      <>
        <div className="login-box">
          <h5>Please type the OTP code sent to your email</h5>
          <input type="text" placeholder="OTP Code" />
          <button>Submit</button><button onClick={renderForgotPassword}>Back</button>
        </div>
      </>
    );
  }
};

export default LoginBox;
