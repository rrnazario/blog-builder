import SocialMedias from "./components/SocialMedias";
import GlobalStyle from "./global";
import Card from "./components/Card";
import StickyHeader from "./components/StickyHeader";
import StaticFooter from "./components/StaticFooter";
import PresentationCard from "./components/PresentationCard";

function App() {
  return <>
    <GlobalStyle />
    <StickyHeader />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <PresentationCard
        buttonCaption="Fale conosco"
        pictureUrl="/pres3.png"
        title="Salve galera!"
        summary={[
          "Se você caiu aqui de paraquedas nós somos Gabi e Éro, um casal brasileiro que decidiu construir uma vida juntos na ensolarada Málaga, na Espanha.",
          "Compartilhamos o nosso dia a dia, dicas sobre a vida na Espanha, curiosidades locais e tudo o que envolve a imigração e os trâmites necessários para viver legalmente no país.",
          "Além de compartilhar nossas experiências, também oferecemos assessoria para quem deseja imigrar para a Espanha, tornando esse processo tão burocrático mais fácil e descomplicado. Desde a obtenção de visto até a busca por moradia, estamos aqui para te ajudar em cada passo do caminho.",
          "Se você está pensando em embarcar nessa aventura de viver na Espanha, que tal contar com a nossa experiência e expertise para tornar essa transição mais tranquila e segura? Entre em contato conosco e vamos juntos fazer desse sonho uma realidade!"]}
        style={{
          maxWidth: '1200px'
        }}
        onClick={() => window.open("https://wa.me/634462597?text=Ol%C3%A1%2C%20vi%20o%20seu%20blog%20%22Di%C3%A1rio%20de%20Rol%C3%AA%22%20e%20gostaria%20de%20conhecer%20mais%20sobre%20o%20trabalho%20de%20voc%C3%AAs%21", "_blank")}
      />
      <br />
      <h2>Sigam nossas redes sociais</h2>
      <SocialMedias
        instagramUrl="https://www.instagram.com/diario.derole"
        youtubeUrl="https://www.youtube.com/@diarioderole"
        tiktokUrl="https://www.tiktok.com/@diario.derole"
        size='3x' />
      <hr />
      <br />
      <h2>Nossas Parcerias</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Card
          buttonCaption="Saiba mais"
          pictureUrl="http://i.stack.imgur.com/Dj7eP.jpg"
          title="Blog dos titulos lorem"
          summary="labore 
      suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
      modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
      totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
      quasi aliquam eligendi, placeat qui corporis!"
          style={{
            maxWidth: '600px'
          }}
        />

        <Card
          buttonCaption="Saiba mais"
          pictureUrl="http://i.stack.imgur.com/Dj7eP.jpg"
          title="Blog dos titulos lorem"
          summary="labore 
      suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
      modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
      totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
      quasi aliquam eligendi, placeat qui corporis!"
          style={{
            maxWidth: '600px'
          }}
        />

        <Card
          buttonCaption="Saiba mais"
          pictureUrl="http://i.stack.imgur.com/Dj7eP.jpg"
          title="Blog dos titulos lorem"
          summary="labore 
      suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
      modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
      totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
      quasi aliquam eligendi, placeat qui corporis!"
          style={{
            maxWidth: '600px'
          }}
        />

      </div>
      <hr />
      <br />
    </div>
    <StaticFooter />
  </>
}

export default App;
