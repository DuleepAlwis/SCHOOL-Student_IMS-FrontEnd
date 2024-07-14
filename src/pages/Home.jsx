import "../saas/pages/_home.scss";
import "../saas/utilities/_common.scss";
import businessIcon from "../assets/school-business-icon.png";
import LoginBox from "../components/LoginBox";
import { useState } from "react";
import { MainForm } from "../components/MainForm";

const Home = () => {

  const [boxState,setBoxState] = useState({
    showLogin:true,
    showForgotPassword:false,
    showOtpCode:false,
    showCreateOrg:false,
    showBacktoHome:false,
    responseMsg:"",
    successState:false,
    errorState:false
  });

  const renderOrgForm = () =>{
    const newBoxState = {
      showLogin:false,
      showForgotPassword:false,
      showOtpCode:false,
      showCreateOrg:true,
      showBacktoHome:true,
      responseMsg:"",
    successState:false,
    errorState:false
    };

    setBoxState(newBoxState);
  };

  const renderHome = ()=>{
    const newBoxState = {
      showLogin:true,
      showForgotPassword:false,
      showOtpCode:false,
      showCreateOrg:false,
      showBacktoHome:false,
      responseMsg:"",
    successState:false,
    errorState:false
    };

    setBoxState(newBoxState);
  };

  return (
    <>
      <div className="header">
      

      <img src={businessIcon} className="business-icon" />
      <h3 className="header-title">SCHOOL</h3>

        <p>Student Information Management System</p>
        <div>
            { !boxState.showBacktoHome &&
              <button onClick={renderOrgForm} className="button-style-one">Register organization</button>
            }
             { boxState.showBacktoHome &&
              <button onClick={renderHome} className="button-style-one">Home</button>
            }
            </div>
      </div>

      <div className="login-container">
        <MainForm showForm={boxState} setShowForm={setBoxState}/>
        <LoginBox showBox={boxState} setShowBox={setBoxState}/>
      </div>
    </>
  );
};

export default Home;
