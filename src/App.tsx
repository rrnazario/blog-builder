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
        buttonCaption="Saiba mais"
        pictureUrl="http://i.stack.imgur.com/Dj7eP.jpg"
        title="Sejam bem-vindos"
        subtitle="Nosso subtitulo"
        summary="labore 
      suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
      modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
      totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
      quasi aliquam eligendi, placeat qui corporis!"
        style={{
          maxWidth: '1200px'
        }}
      />

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
      </div>
      <SocialMedias instagram youtube tiktok size='3x' />
      <hr />
    </div>
    <StaticFooter />
  </>
}

export default App;
