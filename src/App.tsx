import SocialMedias from "./components/SocialMedias";
import GlobalStyle from "./global-style";
import Card from "./components/Card";
import StickyHeader from "./components/StickyHeader";
import StaticFooter from "./components/StaticFooter";
import PresentationCard from "./components/PresentationCard";
import Video from "./components/Video";

function App() {
  const eroUrl = "https://wa.me/634462597?text=Ol%C3%A1%2C%20vi%20o%20seu%20blog%20%22Di%C3%A1rio%20de%20Rol%C3%AA%22%20e%20gostaria%20de%20conhecer%20mais%20sobre%20o%20trabalho%20de%20voc%C3%AAs%21";

  return <>
    <GlobalStyle />
    <StickyHeader />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <PresentationCard
        id="sobre"
        key={99}
        buttonCaption="Fale conosco"
        pictureUrl="/pres3.png"
        title="Salve galera!"
        summary={[
          "Se você caiu aqui de paraquedas, nós somos Gabi e Éro, um casal brasileiro que decidiu construir uma vida juntos na ensolarada Málaga, na Espanha.",
          "Compartilhamos o nosso dia a dia, dicas sobre a vida na Espanha, curiosidades locais e tudo o que envolve a imigração e os trâmites necessários para viver legalmente no país.",
          "Além de compartilhar nossas experiências, também oferecemos assessoria para quem deseja imigrar para a Espanha, tornando esse processo tão burocrático mais fácil e descomplicado. Desde a obtenção de visto até a busca por moradia, estamos aqui para te ajudar em cada passo do caminho.",
          "Se você está pensando em embarcar nessa aventura de viver na Espanha, que tal contar com a nossa experiência e expertise para tornar essa transição mais tranquila e segura? Entre em contato conosco e vamos juntos fazer desse sonho uma realidade!"]}
        style={{
          maxWidth: '1200px'
        }}
        onClick={() => window.open(eroUrl, "_blank")}
      />
      <br />
      <PresentationCard
        id="malaga"
        key={919}
        pictureUrl="/malaga.jpg"
        pictureHeight="350px"
        pictureWidth="350px"
        title="Por que Málaga?"
        summary={[
          "Praia, mar azul, clima mediterrâneo, cultura, arte e muita animação, Málaga é tudo isso. Essa cidade espanhola que fica no sul do país, na região da Andaluzia, foi eleita a melhor do mundo para se viver para expatriados pelo Expat City Ranking de 2023.",
          "A lista é baseada em dados coletados de forma online pela pesquisa Expat Insider. Em 2023, ela foi realizada pela InterNations, que é uma comunidade global de pessoas que vivem e trabalham no exterior. Foram elas que levaram a cidade da Andaluzia à primeira posição.",
          "Malaga tem 300 dias de sol, um clima maravilhoso e único em comparação com outras cidades espanholas ou européias.",
          "O povo malaguenho é muito parecido com o brasileiro, sempre solícito, alegre e não dispensa um bom boteco para confraternizar com os amigos!"]}
        style={{
          maxWidth: '1200px',
          backgroundColor: '#BDE8FA'
        }}
        onClick={() => window.open(eroUrl, "_blank")}
      />
      <h2 id="contato">Siga nossas redes sociais</h2>
      <SocialMedias
        instagramUrl="https://www.instagram.com/diario.derole"
        youtubeUrl="https://www.youtube.com/@diarioderole"
        tiktokUrl="https://www.tiktok.com/@diario.derole"
        whatsappUrl="http://chat.whatsapp.com/KC7AQYLbpCmHxoHWwkZJLL"
        size='3x' />
      <hr />
      <br />
      <h2 id="parceria">Nossas Parcerias</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Card
          key={1}
          buttonCaption="Saiba mais"
          pictureUrl="/espanol.png"
          title="Aprenda Espanhol desde já!"
          summary={["Faça aulas de castelhano falado na Espanha com a professora Gabriela Proença.",
            "Lições focadas nas suas necessidades. Aulas via google meet, podendo ser em grupo ou individuais. ",
            "Encaixe em sua rotina, com a frequência que funciona pra você. Use o cupom DIARIO2024 e ganhe uma aula experimental!"]}
          style={{
            maxWidth: '600px'
          }}
          onClick={() => window.open("https://wa.link/hs1yjp", "_blank")}
        />

        <Card
          key={2}
          buttonCaption="Saiba mais"
          pictureUrl="/assessoria.jpg"
          title="Assessoria jurídica"
          summary={["Uma parceria com a advogada Andreína Martinez, especializada em \"extranjería\".",
            "Com nossa assessoria, iremos te ajudar em diversos trâmites burocráticos aqui na Espanha, com o respaldo de uma profissional muito competente, com vários anos de experiência.",
            "Agende sua videochamada e tire todas as suas dúvidas!"]}
          style={{
            maxWidth: '600px'
          }}
          onClick={() => window.open(eroUrl, "_blank")}
        />

      </div>
      <hr />
      <h2 id="videos">Nossos vídeos imperdíveis</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Video url="https://www.youtube.com/embed/NcXahr80JhA?si=HL96yNL6UgRNtoJG" />
        <Video url="https://www.youtube.com/embed/pyX-p7Edn2E?si=sWsjlTRoTvmKFt3a" />
        <Video url="https://www.youtube.com/embed/YO9lBH1DMNk?si=OJ6U6-zShZUKfEma" />
      </div>

      <hr />
      <br />
    </div>
    <StaticFooter spinLogo />
  </>
}

export default App;
