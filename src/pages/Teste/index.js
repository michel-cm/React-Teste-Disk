import * as C from "./styles";

import { Questao } from "../../components/Questao";
import { useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { Header } from "../../components/Header";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HourglassFullOutlinedIcon from "@mui/icons-material/HourglassFullOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import { ModalNumber } from "../../components/ModalNumber";

export const Teste = () => {
  const [listQuestions, setListQuestions] = useState([]);

  let questoes = [...listQuestions];

  const getList = async () => {
    let results = await Api.getAllQuestions();
    setListQuestions(results);
  };
  console.log(questoes);
  useEffect(() => {
    if (listQuestions.length == 0) {
      getList();
    }
  }, []);

  console.log(listQuestions)

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
        <Questao listQuestions={questoes} />
      <C.Button disabled>Próxima</C.Button>
      </C.TesteContainer>
      

    </C.Container>
  );
};
