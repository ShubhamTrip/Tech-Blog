import './App.css';
import {CTA, Navbar} from './Components';
import {Features, Blog, Footer, Header} from './Containers';
function App() {
  return (
    <div className="App">
      <div>
          <Navbar/>
          <Header/>
      </div>
      <Features/>
      <Blog/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
