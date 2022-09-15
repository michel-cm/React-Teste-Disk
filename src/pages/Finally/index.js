import * as C from "./styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Finally = () => {
  const navigate = useNavigate();
  const { user, logoutAccount } = useAuth();

  useEffect(() => {
    if (user) {
      if (!user.finalizado) {
        navigate("/instrucoes");
      }
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <C.Container>
      <C.Content>
        <h2>Parabéns!</h2>
        <h2>Teste concluido.</h2>
        <p>A Giro Agro agradece e em breve entrará em contato.</p>
      </C.Content>
      <C.Logout onClick={logoutAccount}>
        <p>sair</p>
      </C.Logout>
    </C.Container>
  );
};
