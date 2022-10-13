import './App.css';
import {CTA, Navbar,Brands} from './Components';
import {Features, Blog, Footer, Header} from './Containers';
function App() {
  return (
    <div className="App">
      <div className='top_gradient'>
          <Navbar/>
          <Header/>
      </div>
      <Brands/>
      <Features/>
      <Blog/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
