import { useRouteError } from "react-router-dom";
import './routes.css';
import GlobalStyle from "src/global-style";
import StickyHeader from "src/components/StickyHeader";

export default function ErrorPage() {
  let error = useRouteError();
  console.error(error);

  return <>
    <GlobalStyle />
    <StickyHeader hideMenu />
    <div className='main'>
      <h1>Ops!</h1>
      <p>Página não encontrada!</p>
      <a href='/'>Clique aqui para voltar</a>
    </div>
  </>;
}