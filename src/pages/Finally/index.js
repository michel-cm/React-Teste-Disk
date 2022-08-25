import * as C from "./styles";
import { useControlsQuestions } from "../../hooks/useControlsQuestions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Api } from "../../services/Api";

export const Finally = () => {
  const { currentTestUserBd, isDone, getCurrentTest } = useControlsQuestions();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [docUser, setDocUser] = useState(false);

  useEffect(() => {
    if (!currentTestUserBd && !isDone) {
      navigate("/instrucoes");
    }
  }, [isDone]);

  const getTeste = async () => {
    await getCurrentTest(user.id).then(() => {
      setDocUser(true);
    });
  };
 
  useEffect(() => {
    if (user) {
      getTeste();
    }
  }, [user]);

  useEffect(() => {
    if (docUser) {
      if (currentTestUserBd.tempoEnd) {
        return;
      }
      let valoresTotais = { a: 0, b: 0, c: 0, d: 0 };

      valoresTotais.a = currentTestUserBd.valoresQuestionsUser
        .map((item) => item.a)
        .reduce((sum, i) => {
          return sum + i;
        });

      valoresTotais.b = currentTestUserBd.valoresQuestionsUser
        .map((item) => item.b)
        .reduce((sum, i) => {
          return sum + i;
        });

      valoresTotais.c = currentTestUserBd.valoresQuestionsUser
        .map((item) => item.c)
        .reduce((sum, i) => {
          return sum + i;
        });

      valoresTotais.d = currentTestUserBd.valoresQuestionsUser
        .map((item) => item.d)
        .reduce((sum, i) => {
          return sum + i;
        });

      console.log(valoresTotais);

      const getPredominancia = () => {
        let values = [];
        let predominancia = "";
        values = values.concat(
          valoresTotais.a,
          valoresTotais.b,
          valoresTotais.c,
          valoresTotais.d
        );

        let maior = values[0];
        let indice = 0;
        for (let i = 1; i < values.length; i++) {
          if (values[i] > maior) {
            maior = values[i];
            indice = i;
          }
        }
        switch (indice) {
          case 0:
            predominancia = "Dominante";
            break;
          case 1:
            predominancia = "Influente";
            break;
          case 2:
            predominancia = "Estável";
            break;
          default:
            predominancia = "Condescendente";
        }
        return predominancia;
      };

      const predominancia = getPredominancia();

      Api.finallyTest(currentTestUserBd.idUser, valoresTotais, predominancia);
    }
  }, [docUser]);

  return (
    <C.Container>
      <C.Content>
        <h1>Questionario enviado com sucesso</h1>
        <p>mensagem</p>
      </C.Content>
    </C.Container>
  );
};
