import * as C from "./styles";
import logo from "../../assets/Giro-Agro-logo.png";
import googleIconImg from "../../assets/google-icon.svg";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../services/Api";

export const Home = () => {
  const [showCreateAcc, setShowCreateAcc] = useState(false);

  const navigate = useNavigate();
  const { user, signInWithGoogle , loginWithEmail, createAccount } = useAuth(null);
  const [ email, setEmail] = useState('');
  const [ name, setName] = useState('');
  const [ password, setPassword] = useState('');
 
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

  const handleLoginEmail = async (e) => {
    e.preventDefault();
    if(!user) {      
      await loginWithEmail(email, password, name).then(() => navigate('/instrucoes'));
    }
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if(!user) {      
      await createAccount(email, password, name).then(() => navigate('/instrucoes'));
    }
  }

  return (
    <C.Container>
      {!showCreateAcc ? (
        <C.AreaAccount>
          <C.Logo src={logo} alt="Giro Agro Logo"></C.Logo>
          <C.FormArea>                   
            <C.Email onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder="Email"></C.Email>
            <C.Passoword onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder="Senha"></C.Passoword>         
            <C.ButtonSubmitEmail onClick={handleLoginEmail} type="submit">ENTRAR</C.ButtonSubmitEmail>
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
            <C.Name onChange={(e) => setName(e.target.value)} type={"text"} placeholder="Nome"></C.Name>
            <C.Email onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder="Email"></C.Email>
            <C.Passoword onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder="Senha"></C.Passoword>
            <C.PassowordVerificy
              type={"password"}
              placeholder="Confirme sua senha"
            ></C.PassowordVerificy>
            <C.ButtonSubmitEmail onClick={handleCreateAccount} type="submit">CADASTRAR</C.ButtonSubmitEmail>
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
