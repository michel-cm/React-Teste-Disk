import * as C from "./styles";
import logo from "../../assets/Giro-Agro-logo.png";
import googleIconImg from "../../assets/google-icon.svg";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  const [showCreateAcc, setShowCreateAcc] = useState(false);

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

  const handleShowCreateAcc = () => {
    setShowCreateAcc(!showCreateAcc)
  }

  return (
    <C.Container>
      {!showCreateAcc ? (
        <C.AreaAccount>
          <C.Logo src={logo} alt="Giro Agro Logo"></C.Logo>
          <C.FormArea>                   
            <C.Email type={"email"} placeholder="Email"></C.Email>
            <C.Passoword type={"password"} placeholder="Senha"></C.Passoword>         
            <C.ButtonSubmitEmail type="submit">ENTRAR</C.ButtonSubmitEmail>
          </C.FormArea>
          <C.Ou>
            <p>ou entre usando</p>
          </C.Ou>
          <C.ButtonGoogle onClick={handleLoginGoogle}>
            <img src={googleIconImg} alt="logo do Google" />
            Google
          </C.ButtonGoogle>
          <C.AreaSignUp>
            <p>Não possui conta?</p>
            <span onClick={handleShowCreateAcc}>se inscreva</span>
          </C.AreaSignUp>
        </C.AreaAccount>
      ) : (
        <C.AreaAccount>
          <C.FormArea>
            <h1>Cadastrar</h1>
            <C.Name type={"text"} placeholder="Nome"></C.Name>
            <C.Email type={"email"} placeholder="Email"></C.Email>
            <C.Passoword type={"password"} placeholder="Senha"></C.Passoword>
            <C.PassowordVerificy
              type={"password"}
              placeholder="Confirme sua senha"
            ></C.PassowordVerificy>
            <C.ButtonSubmitEmail type="submit">CADASTRAR</C.ButtonSubmitEmail>
          </C.FormArea>
          <C.Ou>
            <p>ou entre usando</p>
          </C.Ou>
          <C.ButtonGoogle onClick={handleLoginGoogle}>
            <img src={googleIconImg} alt="logo do Google" />
            Google
          </C.ButtonGoogle>
          <C.AreaSignUp>            
            <span onClick={handleShowCreateAcc}>Voltar</span>
          </C.AreaSignUp>
        </C.AreaAccount>
      )}
    </C.Container>
  );
};
