import * as C from "./styled";
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
  const { user, signInWithGoogle, loginWithEmail, createAccount } =
    useAuth(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [cel, setCel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [listCandidatesPermissions, setListCandidatesPermissions] = useState(
    []
  );

  useEffect(() => {
    if (listCandidatesPermissions.length == 0) {
      Api.getListCandidatesPermissions().then((data) => {
        setListCandidatesPermissions(data);
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      if (user.email) {
        navigate("/instrucoes");
      }
    }
  }, [user]);

  const handleShowCreateAcc = () => {
    setShowCreateAcc(!showCreateAcc);
  };

  const handleLoginEmail = async (e) => {
    e.preventDefault();
    if (email && password) {
      await loginWithEmail(email, password).then(() => navigate("/instrucoes"));
    } else {
      alert("Campos Vazios!");
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("senhas diferentes!");
      return;
    }

    let flag = false;
    listCandidatesPermissions.forEach(async (candidate) => {
      if (candidate.email == email) {
        flag = true;
        await createAccount(email, password, name, cel, city).then(() =>
          navigate("/instrucoes")
        );
      }
    });
    if (!flag) {
      alert("Email n??o possui permiss??o para a realiza????o do teste");
    }
  };

  return (
    <C.Container>
      {!showCreateAcc ? (
        <C.AreaAccount>
          <C.Logo src={logo} alt="Giro Agro Logo"></C.Logo>
          <C.FormArea>
            <C.Email
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              placeholder="Email"
            ></C.Email>
            <C.Passoword
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder="Senha"
            ></C.Passoword>
            <C.ButtonSubmitEmail onClick={handleLoginEmail} type="submit">
              ENTRAR
            </C.ButtonSubmitEmail>
          </C.FormArea>

          <C.AreaSignUp>
            <p>N??o possui conta?</p>
            <span onClick={handleShowCreateAcc}>se inscreva</span>
          </C.AreaSignUp>
        </C.AreaAccount>
      ) : (
        <C.AreaAccount>
          <C.FormArea>
            <h1>Cadastrar</h1>
            <C.Cel
              onChange={(e) => setCel(e.target.value)}
              type={"text"}
              placeholder="Celular com DDD"
            ></C.Cel>
            <C.City
              onChange={(e) => setCity(e.target.value)}
              type={"text"}
              placeholder="Cidade"
            ></C.City>
            <C.Email
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              placeholder="Email"
            ></C.Email>
            <C.Passoword
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder="Senha"
            ></C.Passoword>
            <C.PassowordVerificy
              onChange={(e) => setconfirmPassword(e.target.value)}
              type={"password"}
              placeholder="Confirme sua senha"
            ></C.PassowordVerificy>
            <C.ButtonSubmitEmail onClick={handleCreateAccount} type="submit">
              CADASTRAR
            </C.ButtonSubmitEmail>
          </C.FormArea>

          <C.AreaSignUp>
            <span onClick={handleShowCreateAcc}>Voltar</span>
          </C.AreaSignUp>
        </C.AreaAccount>
      )}
    </C.Container>
  );
};
