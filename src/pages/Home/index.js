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

  useEffect(() => {
    if (user) {
      navigate("/instrucoes");
    }
  }, [user]);

  return (
    <C.Container>
      <C.AreaAccount>
        <img src={logo} alt="Giro Agro Logo"></img>
        <C.FormArea>
          <C.Name type={"text"} placeholder="Nome"></C.Name>
          <C.Email type={"email"} placeholder="Email"></C.Email>
          <C.Passoword type={"password"} placeholder="Senha"></C.Passoword>
          <C.PassowordVerificy
            type={"password"}
            placeholder="Confirme sua senha"
          ></C.PassowordVerificy>
          <C.ButtonSubmitEmail type="submit">Entrar</C.ButtonSubmitEmail>
        </C.FormArea>
        <C.Ou>
          <p>ou</p>
        </C.Ou>
        <C.ButtonGoogle onClick={handleLoginGoogle}>
          <img src={googleIconImg} alt="logo do Google" />
          Entre com o Google
        </C.ButtonGoogle>
      </C.AreaAccount>
    </C.Container>
  );
};
