import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import AddItem from "../../assets/addAvatar.png";
import { auth, storage } from "../../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [err,setError] = useState(false);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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
          {/* {err && <span>Something Went Wrong</span>} */}
        <p>You dont have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
