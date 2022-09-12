import * as C from "./styled";
import { BsJournalText } from "react-icons/bs";

import { Questao } from "../../components/Questao";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { Api } from "../../services/Api";
import { useTimer } from "../../hooks/userTimer";

import { ModalInstrucoes } from "./ModalInstrucoes";

export const Teste = () => {
  const [buttonNextActive, setButtonNextActive] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);

  const [modalInstrucoes, setModalInstrucoes] = useState(false);

  const navigate = useNavigate();

  const { user, getTesteCandidate } = useAuth();
  const { timer } = useTimer();

  let timerActual; // get timer actual
  async function updateTimerBd() {
    await Api.updateTimer(user, timerActual);
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      if (!user.tempoStart) {
        Api.startTeste(user);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      if (user.finalizado) {
        navigate("/finalizado");
      }
    }
  }, [user]);

  function elementEqual(element, index, array) {
    return element == "";
  }

  useEffect(() => {
    if (userAnswers.some(elementEqual)) {
      return;
    }
    if (userAnswers.length > 0) {
      for (let i = 0; i < userAnswers.length; i++) {
        for (let j = i + 1; j < userAnswers.length; j++) {
          if (userAnswers[i] == userAnswers[j]) {
            setButtonNextActive(true);
            return;
          }
        }
      }
      setButtonNextActive(false);
    }
  }, [userAnswers]);

  const handleSubmitQuestion = async () => {
    //  each question
    await Api.submitAnswerValues(userAnswers, user).then(async () => {
      await updateTimerBd().then(async () => {
        await getTesteCandidate(user.email);
      });
      setButtonNextActive(true);
    });
  };

  const getPredominancia = (valoresTotais) => {
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

  const handleSubmitTest = async () => {
    // final question
    await Api.submitAnswerValues(userAnswers, user).then(async () => {
      await updateTimerBd().then(async () => {
        await Api.getTesteUser(user.email).then(async (data) => {
          console.log(user);
          let valoresTotais = { a: 0, b: 0, c: 0, d: 0 };

          valoresTotais.a = data.valoresQuestionsUser
            .map((item) => item.a)
            .reduce((sum, i) => {
              return sum + i;
            });

          valoresTotais.b = data.valoresQuestionsUser
            .map((item) => item.b)
            .reduce((sum, i) => {
              return sum + i;
            });

          valoresTotais.c = data.valoresQuestionsUser
            .map((item) => item.c)
            .reduce((sum, i) => {
              return sum + i;
            });

          valoresTotais.d = data.valoresQuestionsUser
            .map((item) => item.d)
            .reduce((sum, i) => {
              return sum + i;
            });
          const predominancia = getPredominancia(valoresTotais);
          await Api.finallyTest(user, valoresTotais, predominancia).then(
            async () => {
              await getTesteCandidate(user.email).then(() => {
                navigate("/finalizado");
              });
            }
          );
        });
      });
    });
  };

  return (
    <C.Container>
      <Header
        fnUpdateTimer={updateTimerBd}
        setModalInstrucoes={setModalInstrucoes}
      />
      {modalInstrucoes && (
        <C.ModalInstrucoes modalInstrucoes>
          <ModalInstrucoes setModalInstrucoes={setModalInstrucoes} />
        </C.ModalInstrucoes>
      )}
      <C.TesteContainer>
        <C.InfoTesteArea>
          <C.InfoQuestaoAtual>
            <BsJournalText />
            <span>
              {user && `${user.currentQuestion + 1} / ${user.qtdQuestions}`}
            </span>
          </C.InfoQuestaoAtual>
          {
            <C.InfoTempo>
              {user && (
                <CountdownCircleTimer
                  size={100}
                  isPlaying
                  onComplete={handleSubmitTest}
                  duration={timer & timer}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[7, 3, 2, 0]}
                >
                  {({ remainingTime }) => {
                    timerActual = remainingTime;

                    const minutes = Math.floor(remainingTime / 60);
                    const seconds = remainingTime % 60;

                    return `${minutes < 10 ? "0" + minutes : minutes}:${
                      seconds < 10 ? "0" + seconds : seconds
                    }`;
                  }}
                </CountdownCircleTimer>
              )}
            </C.InfoTempo>
          }
        </C.InfoTesteArea>
        <Questao user={user} setUserAnswers={setUserAnswers} />
        <C.Button
          disabled={buttonNextActive}
          onClick={
            user && user.questionsList.length == user.currentQuestion + 1
              ? handleSubmitTest
              : handleSubmitQuestion
          }
        >
          {user && user.questionsList.length == user.currentQuestion + 1
            ? "Finalizar"
            : "Próxima"}
        </C.Button>
      </C.TesteContainer>
    </C.Container>
  );
};
