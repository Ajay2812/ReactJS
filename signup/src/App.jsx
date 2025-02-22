import React from "react";
export default function App() {
  const [action, setAction] = React.useState("Sign Up");

  return (
    <div className="container">
      <h1>{action}</h1>
      <div className="input-form">
        {action==="Sign Up"?
        <input type="text" placeholder="Name" /> : ""
}
        <input type="email" placeholder="Email id" />
        <input type="password" placeholder="Password" />
        {action==="Login"?
        <div className="forget">
          <p>Forgot Password?</p>
          <a href="#">Click Here</a>
        </div>:""
}

        <div className="btns">
          <button
            className={action === "Login" ? "btn submit" : "btn"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "btn submit" : "btn"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
