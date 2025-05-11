import Navbar from "./components/Navbar";
import About from './components/About';
import Portfolio from './components/Portfolio';
import{
  HashRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import Footer from "./components/Footer";
import logo from "./components/images/logo.png"

function App() {
    
  return (
    <>
    <Router>
    <Navbar img={logo}/>
    <div className="container my-4">
      <Routes>
         <Route exact path='/' element={<About/>}/>
         <Route exact path='/Portfolio' element={<Portfolio heading="Ramdev Graphics Provide Various Services That Work Provided Belowe"/>}/>        
      </Routes>
    </div>
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;
