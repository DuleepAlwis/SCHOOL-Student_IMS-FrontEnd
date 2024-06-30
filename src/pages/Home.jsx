import "../saas/pages/_home.scss";
import "../saas/utilities/_common.scss";
import businessIcon from "../assets/school-business-icon.png";
import LoginBox from "../components/LoginBox";

const Home = () => {
  return (
    <>
      <div className="header">
      

      <img src={businessIcon} className="business-icon" />
      <h3 className="header-title">SCHOOL</h3>

        <p>Student Information Management System</p>
        <div>
            <button className="button-style-one">Register organization</button>
            
            </div>
      </div>

      <div className="login-container">
        
        <LoginBox showLogin={true} showForgotPassword={false} showOtpCode={false}/>
      </div>
    </>
  );
};

export default Home;
