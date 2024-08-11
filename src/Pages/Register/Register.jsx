import React from "react";
import AddItem from "../../assets/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={AddItem} alt="add" />
            <span>Add an Avatar</span>
          </label>
          <button>SignUp</button>
        </form>
        <p>You dont have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
