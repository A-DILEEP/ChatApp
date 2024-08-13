import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">ChatApp</span>
      <div className="user">
        <img src="https://th.bing.com/th/id/OIP.aHw6t83ORCMxy4udJCaEqgHaIp?w=171&h=200&c=7&r=0&o=5&pid=1.7" />
        <span>Dileep</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar
