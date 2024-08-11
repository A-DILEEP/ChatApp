import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='First Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='password' />
                <input type="file" />
                <button>SignUp</button>
            </form>
            <p>You dont have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register
