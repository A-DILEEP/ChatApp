import React from "react";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <p>You dont have an account ? Register</p>
      </div>
    </div>
  );
};

export default Login;
