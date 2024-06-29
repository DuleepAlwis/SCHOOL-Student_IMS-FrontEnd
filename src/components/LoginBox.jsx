
import "../saas/components/_login_box.scss";

const LoginBox = ()=>{
    return (
        <>
            <div className="login-box">
        <h3>Login</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
        </>
    )
}

export default LoginBox;