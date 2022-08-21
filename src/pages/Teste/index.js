import * as C from "./styles";
import { Questao } from "../../components/Questao";
import { useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { Header } from "../../components/Header";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HourglassFullOutlinedIcon from "@mui/icons-material/HourglassFullOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useControlsQuestions } from "../../hooks/useControlsQuestions";

export const Teste = () => {
  const [listQuestions, setListQuestions] = useState([]);
  const [buttonNextActive, setButtonNextActive] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLastQuestion, setisLastQuestion] = useState(listQuestions.length);

  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentQuestion, lastQuestion, setcurrentQuestion, setLastQuestion } =
    useControlsQuestions();

  const getList = async () => {
    let results = await Api.getAllQuestions();
    localStorage.setItem("listQuestions", JSON.stringify(results));
    setListQuestions(results);
  };

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

  useEffect(() => {
    ////////
    const listLocal = localStorage.getItem("listQuestions");
    if (listLocal !== null) {
      setListQuestions(JSON.parse(listLocal));
    } else {
      getList();
    }
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (user && listQuestions) {
      const startTeste = async () => {
        Api.startTeste(user.id, listQuestions);
      };
      startTeste();
    }
  }, [user, listQuestions]);

  const handleSubmitQuestion = async () => {
    await Api.submitAnswerValues(user.id, userAnswers).then(() => {
      setcurrentQuestion(currentQuestion + 1);
    });
  };

  const handleSubmitTest = () => {};

  return (
    <C.Container>
      <Header />
      <C.TesteContainer>
        <C.InfoTesteArea>
          <C.InfoQuestaoAtual>
            <AssignmentOutlinedIcon style={{ color: "#2B6DE6" }} />
            <span className="info-questao-atual-content">1/23</span>
          </C.InfoQuestaoAtual>
          <C.InfoTempo>
            <HourglassFullOutlinedIcon style={{ color: "#f2f2f2" }} />
            <span className="info-questao-atual-content">18:32</span>
          </C.InfoTempo>
        </C.InfoTesteArea>
        <Questao
          listQuestions={listQuestions}
          setUserAnswers={setUserAnswers}
        />
        <C.Button
          disabled={buttonNextActive}
          onClick={
            currentQuestion < isLastQuestion + 1
              ? handleSubmitQuestion
              : handleSubmitQuestion
          }
        >
          {currentQuestion == isLastQuestion + 1 ? "Finalizar" : "Próxima"}
        </C.Button>
      </C.TesteContainer>
    </C.Container>
  );
};
