import Logo from "./components/Logo";
import RoundedButton from "./components/RoundedButton";
import SocialMedias from "./components/SocialMedias";
import GlobalStyle from "./global";

function App() {
  return <>
    <GlobalStyle />
    <Logo />
    <RoundedButton caption="Avaliar" />
    <SocialMedias instagram youtube />
  </>
}

export default App;
