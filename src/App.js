import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skill from "./components/Skill";
import { Resume } from "./pages/Resume";


function App() {
  return (
    <div className="App">
       <Router>
       <Navbar/>
      
       <Route exact path='/' component={Resume}/>
       <Route path='/react' component={Skill}/>
       
       <Route path='/django' component={Skill}/>
       
       <Route path='/tailwind' component={Skill}/>
    
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
