import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import "../styles/Sign.css";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const SignIn = ({ signInpageOff }) => {
  const history = useHistory();
  const { authedUser, setAuthedUser } = useContext(UserContext);

  const initValue = { email: "", password: "" };
  const [user, setUser] = useState(initValue);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (user.password && user.email) {
      const data = await fetchQuery({
        uri: "http://localhost:4000/auth/login",
        method: "POST",
        body: user,
      });
      console.log(data);
      setUser(initValue);
      setAuthedUser(true);
      history.push("/");
    } else {
      alert("Please enter all fields");
    }
  };

  const handleSignUP = () => {
    history.push("/signup");
  };

  return (
    <div className={`form-container ${signInpageOff}`}>
      <div className="formheader">
        <h1>Hello Friend</h1>
        <h3>Sing Up Here If you don't have an account</h3>
        <button className="but" onClick={handleSignUP}>
          Create Account
        </button>
      </div>
      <form onSubmit={handleSignIn}>
        <div>
          <Input
            type="email"
            value={user.email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            value={user.password}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="but actionbut">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
