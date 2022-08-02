import "../styles/Questao.css";

export const Questao = ({ listQuestions }) => {
  const items = [
    {
      title: "Em um restaurante. Estou esperando uma mesa e o garçom me diz que em 10 minutos terei uma mesa, porém passam 20 minutos:",
      a: "Me aborreço e digo ao garçom que já se passou o dobro do tempo, e lhe informo que se demorar muito irei embora e eles perderão um cliente.",
      b: "Não me dou conta pois estou envolvido em uma conversa.",
      c: "Não me fixo ao tempo, ainda que eu saiba do atraso, não falo nada.",
      d: "Informo ao Garçom exatamente a hora que cheguei e exatamente o tempo que passou e peço que por favor me diga com exatidão quanto tempo ainda falta para que eu possa tomar uma decisão.",
    },
  ];

  return (
    <div className="questao-container">
      {items.map((item, key) => (
        <div key={key} className="questao-item">
          <div class="conteinerTitulo">
            <h4 class="titulo"> {item.title} </h4>
          </div>

          <table className="questao-tabela">
            <tr>
              <td>
                <h4>{item.a}</h4>
                <input type="number" />
              </td>
            </tr>

            <tr>
              <td>
                <h4>{item.b}</h4>
                <input type="number" />
              </td>
            </tr>

            <tr>
              <td>
                <h4>{item.c}</h4>
                <input type="number" />
              </td>
            </tr>

            <tr>
              <td>
                <h4>{item.d}</h4>
                <input type="number" />
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};
