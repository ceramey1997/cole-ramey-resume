import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import PersonalProjects from './components/PersonalProjects';
import CoverLetter from './components/CoverLetter';
import MobileNavbar from "./components/MobileNavbar";

function App() {

  return (
        <Router basename="cole-ramey-resume">
          <Navbar />
          <MobileNavbar className='mobile'/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/personal-projects' component={PersonalProjects} />
            <Route path='/cover-letter' component={CoverLetter} />
          </Switch>
        </Router>
  );
}

export default App;
