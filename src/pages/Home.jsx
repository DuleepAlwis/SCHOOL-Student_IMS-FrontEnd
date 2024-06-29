import "../saas/pages/_home.scss";
import "../saas/utilities/_common.scss";
import businessIcon from "../assets/school-business-icon.png";
import loginBox from "../components/loginBox";

const Home = () => {
  return (
    <>
      <div class="header">
      <button className="button-style-one">Register organization</button>

      <img src={businessIcon} className="business-icon" />

        <h1 className="header-title">SCHOOL</h1>
        <p>Student Information Management System</p>
      </div>

      <div className="login-container">
        
        <loginBox/>
      </div>
    </>
  );
};

export default Home;
