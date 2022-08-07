import * as C from "./styles";

export const Questao = ({ listQuestions }) => {
  return (
    <C.Container>
      {listQuestions.map((item, key) => (
        <div key={key} className="questao-item">
          <C.ContainerTituloPergunta>
            <h1 className="titulo"> {item.title} </h1>
          </C.ContainerTituloPergunta>

          <C.ContainerTabela>
            <tbody>
              <tr>
                <td>
                  <span>{item.a}</span>
                  <input type="number" />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.b}</span>
                  <input type="number" />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.c}</span>
                  <input type="number" />
                </td>
              </tr>

              <tr>
                <td>
                  <span>{item.d}</span>
                  <input type="number" />
                </td>
              </tr>
            </tbody>
          </C.ContainerTabela>
        </div>
      ))}
    </C.Container>
  );
};
