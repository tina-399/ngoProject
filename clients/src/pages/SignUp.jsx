import { useState, useContext } from "react";
import Input from "../components/Input";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import "../styles/Sign.css";

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

const SignUp = ({ signUppageOff }) => {
  const history = useHistory();
  const { authedUser, setAuthedUser } = useContext(UserContext);

  const initValue = { firstName: "", lastName: "", email: "", password: "" };
  const [user, setUser] = useState(initValue);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.password && user.email) {
      const data = await fetchQuery({
        uri: "http://localhost:4000/auth/register",
        method: "POST",
        body: user,
      });
      console.log(data);
      setUser(initValue);

      history.push("/signin");
    } else {
      alert("Please enter all fields");
    }
  };
  const handleSignIN = () => {
    history.push("/signin");
  };

  return (
    <div className={`form-container ${signUppageOff}`}>
      <div className="formheader">
        <h1>Hello Friend</h1>
        <h3>Sing In to Get All access to Pages</h3>
        <button className="but" onClick={handleSignIN}>
          Sign in to you Account
        </button>
      </div>
      <form onSubmit={handleSignUp}>
        <Input
          type="first name"
          value={user.firstName}
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
        />
        <Input
          type="last name"
          value={user.lastName}
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <button className="but actionbut">Sign Up</button>
        {/* <Button buttona="submit" text="Sign Up" /> */}
      </form>
    </div>
  );
};

export default SignUp;
