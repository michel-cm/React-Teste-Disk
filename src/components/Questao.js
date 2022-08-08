import "../styles/Questao.css";

export const Questao = ({ listQuestions }) => {

  return (
    <div className="questao-container">
      {listQuestions.map((item, key) => (
        <div key={key} className="questao-item">
          <div className="conteinerTitulo">
            <h4 className="titulo"> {item.title} </h4>
          </div>

          <table className="questao-tabela">
            <tbody>
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
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
