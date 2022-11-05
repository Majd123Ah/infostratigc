import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Header from './component/Header';
import Services from './component/Services';
import Project from './component/Ourprojects';
import Contactform from './component/Contactform';
import Footer from './component/Footer';

function App () {
  
    return (
      <div className='App'>
        <Navbar />
        <Header />
        <Services />
        <Project />
        <Contactform />
        <Footer />
      </div>

  );
}


export default App;
