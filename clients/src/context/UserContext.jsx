import React from "react";

const UserContext = React.createContext({
  authedUser: false,
  setAuthedUser: (auth) => {},
});
export default UserContext;
