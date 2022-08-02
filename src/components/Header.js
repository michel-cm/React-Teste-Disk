import { Link } from "react-router-dom";
import { Home } from "../pages/Home";
import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h3 className="header-title">Michel Corrêa Martins</h3>        
        <Link className="header-button" to={'/'}>Instruções</Link>
      </div>
    </div>
  );
};
