import './App.css';
import {CTA, Navbar,Brands} from './Components';
import {Gpt3, Blog, Footer, Header} from './Containers';
function App() {
  return (
    <div className="App">
      <div className='top_gradient'>
          <Navbar/>
          <Header/>
      </div>
      <Brands/>
      <Gpt3/>
      <Blog/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
