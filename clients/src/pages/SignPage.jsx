import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../styles/SignPage.css";
import SignNav from "../components/SignNav";
import { useState } from "react";

const SignPage = () => {
  
  return (
    <div className="signpage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignPage;
