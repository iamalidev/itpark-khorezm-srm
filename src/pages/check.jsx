import Root from "@/components/root";
import { UserContext } from "@/context/userContext";
import React from "react";
import { useContext } from "react";
import LoginPage from "./login";

const CheckUser = () => {
  const { tokens } = useContext(UserContext);

  return <>{tokens ? <Root /> : <LoginPage />}</>;
};

export default CheckUser;
