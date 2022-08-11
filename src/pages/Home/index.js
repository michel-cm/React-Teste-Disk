import * as C from "./styles";
import logo from "../../assets/Giro-Agro-logo.png";
import googleIconImg from "../../assets/google-icon.svg";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth(null);

  async function handleLoginGoogle() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("/instrucoes");
  }

  useEffect(()=> {
    if(user) {
      navigate('instrucoes');
    }
  },[user])

  return (
    <C.Container>
      <C.AreaAccount>
        <img src={logo} alt="Giro Agro Logo"></img>
        <form>
          <input type={'email'} placeholder="Email"></input>
          <input type={'password'} placeholder="Email"></input>
          <button type="submit">Entrar</button>
        </form>
        <button onClick={handleLoginGoogle}>
          <img src={googleIconImg} alt="logo do Google" />
          Entre com o Google
        </button>
      </C.AreaAccount>
    </C.Container>
  );
};
