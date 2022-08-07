import * as C from "./styles";
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';

export const Instrucoes = () => {
    return (
        <div className=''>
            <Header />
           <h1>Tela instruções</h1>
           <Link to={'/teste'}>Começar o Teste</Link>
        </div>
    );
}