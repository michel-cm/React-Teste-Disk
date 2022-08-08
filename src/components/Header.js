import { Link } from "react-router-dom";
import { Home } from "../pages/Instrucoes";
import "../styles/Header.css";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-user-area">
          <AccountCircleOutlinedIcon style={{ color: "#2B6DE6" }} />
          <h3 className="header-title">Michel Corrêa Martins</h3>
        </div>
        <Link className="header-button" to={"/"}>
          Instruções
        </Link>
      </div>
    </div>
  );
};
