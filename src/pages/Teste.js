import "../styles/Teste.css";
import { Questao } from "../components/Questao";
import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import { Header } from "../components/Header";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HourglassFullOutlinedIcon from "@mui/icons-material/HourglassFullOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

export const Teste = () => {
  const [listQuestions, setListQuestions] = useState([]);

  let questoes = [...listQuestions];

  const getList = async () => {
    let results = await Api.getAllQuestions();
    setListQuestions(results);
  };
  console.log(questoes)
  useEffect(() => {
    if (listQuestions.length == 0) {
      getList();
    }
  }, []);

  return (
    <div>
      <Header />

      <div className="teste-container">
        <div className="info-teste-area">
          <div className="info-questao-atual">
            <AssignmentOutlinedIcon style={{ color: "#2B6DE6" }} />
            <span className="info-questao-atual-content">1/23</span>
          </div>
          <div className="info-tempo">
            <HourglassFullOutlinedIcon style={{ color: "#f2f2f2" }} />
            <span className="info-questao-atual-content">18:32</span>
          </div>
        </div>
        <Questao listQuestions={questoes} />
      </div>
    </div>
  );
};
