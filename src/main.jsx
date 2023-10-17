import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import Root from "./components/root";
import "./assets/style/main.scss";
import UserProvider from "./context/userContext";
import CheckUser from "./pages/check";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <CheckUser/>
    </UserProvider>
  </BrowserRouter>
);
