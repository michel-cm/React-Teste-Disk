import "../styles/Teste.css";
import { Questao } from "../components/Questao";
import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import { Header } from "../components/Header";

export const Teste = () => {
  const [listQuestions, setListQuestions] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let results = await Api.getAllQuestions();
      setListQuestions(results);
    };
    getList();
  }, []);

  return (
    <div>
      <Header />

      <div className="teste-container">
        <div className="info-teste-area">
          <div className="info-questao-atual">
            <span className="info-questao-atual-content">1/23</span>
          </div>
          <div className="info-tempo">
            <span className="info-questao-atual-content">18:32</span>
          </div>
        </div>
        <Questao listQuestions={listQuestions} />
      </div>
    </div>
  );
};
