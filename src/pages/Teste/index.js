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
  const [isLastQuestion, setisLastQuestion] = useState(false);


  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    currentQuestion,
    setcurrentQuestion,
    setIsDone,        
    currentTestUserBd,   
    
  } = useControlsQuestions();


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
    if (currentTestUserBd) {      
      if (currentTestUserBd.finalizado) {
        navigate("/finally");
      }     
    }
  }, [currentTestUserBd]);


  useEffect(() => {
    ////////
    const listLocal = localStorage.getItem("listQuestions");
    if (listLocal !== null) {
      setListQuestions(JSON.parse(listLocal));}
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (user && listQuestions) {
      const startTeste = async () => {
        await Api.startTeste(user.id,user.name,user.email,listQuestions);
      };
      startTeste();
    }
  }, [user, listQuestions]);

  useEffect(() => {
    if (currentQuestion) {
     const lastQuestion = localStorage.getItem('lenghtList')
      if (currentQuestion + 1 == lastQuestion) {
        setisLastQuestion(true);
      }
    }
  }, [currentQuestion]);


  const handleSubmitQuestion = async () => {
    await Api.submitAnswerValues(
      user.id,
      userAnswers,
      currentQuestion,
      false,      
    ).then(() => {
      setcurrentQuestion(currentQuestion + 1);
      setButtonNextActive(true)
    });
  };

  const handleSubmitTest = async () => {
    await Api.submitAnswerValues(
      user.id,
      userAnswers,
      currentQuestion,
      true,     
    ).then(() => {
      setIsDone(true);
    });
  };
  
  
  return (
    <C.Container>
      <Header />
      <C.TesteContainer>
        <C.InfoTesteArea>
          <C.InfoQuestaoAtual>
            <AssignmentOutlinedIcon style={{ color: "#2B6DE6" }} />
            <span className="info-questao-atual-content">
              {currentQuestion + 1}/{listQuestions.length}
            </span>
          </C.InfoQuestaoAtual>
       { /* <C.InfoTempo>
            {currentTestUserBd && (
              <CountdownCircleTimer
                size={100}
                isPlaying
                onComplete={handleSubmitTest}
                duration={timer}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 3, 2, 0]}
              >
                {({ remainingTime }) => {
                  
                  localStorage.setItem('currentTime',  remainingTime)
                  
                  const minutes = Math.floor(remainingTime / 60);
                  const seconds = remainingTime % 60;

                  return `${minutes < 10 ? "0" + minutes : minutes}:${
                    seconds < 10 ? "0" + seconds : seconds
                  }`;
                }}
              </CountdownCircleTimer>
            )}
              </C.InfoTempo>*/}
        </C.InfoTesteArea>
        <Questao
          listQuestions={listQuestions}
          setUserAnswers={setUserAnswers}
        />
        <C.Button
          disabled={buttonNextActive}
          onClick={isLastQuestion ? handleSubmitTest : handleSubmitQuestion}
        >
          {isLastQuestion ? "Finalizar" : "Próxima"}
        </C.Button>
      </C.TesteContainer>
    </C.Container>
  );
};
