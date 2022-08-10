import * as C from "./styles";
import { Link } from "react-router-dom";

import logo from "../../assets/Giro-Agro-logo.png";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export const Instrucoes = () => {

  const navigate = useNavigate();
  const { user} = useAuth();

  useEffect(() => {
    if(!user) {
      navigate('/');
    }
  },[])

  return (
    <C.Container>
      <C.Logo src={logo} alt="Giro Agro logo" />
      <C.ContainerInstrucoes>
        <C.TituloArea>
          <h1>
            <span>INSTRUÇÕES</span> PARA REALIZAÇÃO DO QUESTIONÁRIO
          </h1>
        </C.TituloArea>

        <C.AreaInstrucoes>
          <C.P1>
            Analise as opções e enumere as mesmas de <b>1</b> a <b>4</b>.<br />A
            opção com a qual você <b>MAIS</b> se identifica, insira o{" "}
            <b>NÚMERO 4</b> na respectiva caixinha.
            <br />E aquela com a qual você <b>MENOS</b> tem afinidade, assinale
            com um <b>NÚMERO 1</b>.<br />
          </C.P1>

          <C.P2>Por exemplo, na pergunta 26, se a frase/pergunta for:</C.P2>
          <C.AreaExemploPergunta>
            <span>
              <b>26. Características que mais te descrevem:</b>
            </span>
            <ol type="A">
              <li>Toma ação, Persuasivo, Convincente.</li>
              <li>Carismático, Magnético, Desinibido.</li>
              <li>Humilde, Compassivo com as pessoas</li>
              <li>Sistemático, Cético, Precavido</li>
            </ol>
          </C.AreaExemploPergunta>
          <C.AreaExemplosResposta>
            <C.AreaRespostaIncorreta>
              <p>
                Uma <span>resposta incorreta</span> seria empatar opções:
              </p>
              <ol type="A">
                <li>4</li>
                <li>3</li>
                <li>3</li>
                <li>2</li>
              </ol>
            </C.AreaRespostaIncorreta>

            <C.AreaRespostaCorreta>
              <p>
                Vejamos um <span>exemplo correto.</span>
              </p>
              <ol type="A">
                <li>2</li>
                <li> 4</li>
                <li> 1</li>
                <li>3</li>
              </ol>
            </C.AreaRespostaCorreta>
          </C.AreaExemplosResposta>

          <C.AreaLembrete>
            <p>
              É muito <b>importante</b> que enumere cada uma das opções com
              1,2,3 e 4
            </p>
            <p>
              <b>NÃO PENSE MUITO PARA RESPONDER</b>, o primeiro pensamento que
              vem à mente é o mais instintivo, livre de filtros ou
              direcionamentos.
            </p>
            <p>
              Lembre-se que <b>não podem ocorrer empates</b>. Um mesmo número
              não pode ser usado duas vezes na mesma questão.
            </p>
            <C.AreaTempo>
              <AccessTimeOutlinedIcon /> Tempo do teste:<span> 20 minutos</span>.
            </C.AreaTempo>
          </C.AreaLembrete>
        </C.AreaInstrucoes>
      </C.ContainerInstrucoes>
      <Link to={"/teste"}>
        <C.Button>INICIAR TESTE</C.Button>
      </Link>
    </C.Container>
  );
};
