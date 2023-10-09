import './App.css';
import Navbar from './components/Navbar/Navbar'
import Frontendme from './components/Frontendme/Frontendme'
import Aboutme from './components/Aboutme/Aboutme'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio';
import Copyright from './components/Copyright/Copyright';

 
 


function App() {
  return (
   <>
    <Navbar />
    <Frontendme />
    <Aboutme />
    <Portfolio />
    <Contact />
    <Copyright />


   </>

  );
}

export default App;
