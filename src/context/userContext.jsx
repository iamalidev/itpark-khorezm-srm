import { createContext, React, useEffect } from "react";
import { useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [tokens, setTokens] = useState(!!localStorage.getItem("accessToken"));

  return (
    <UserContext.Provider value={{ tokens, setTokens }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
