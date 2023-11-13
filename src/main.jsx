import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/userContext";
import CheckUser from "./pages/check";
import "./assets/style/main.scss";
import Root from "./components/root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <Root/>
    </UserProvider>
  </BrowserRouter>
);
