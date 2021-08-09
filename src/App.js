import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import PersonalProjects from './components/PersonalProjects';
import CoverLetter from './components/CoverLetter';
import MobileNavbar from "./components/MobileNavbar";

//import windowDimensions from './windowDimensions';
function App() {

  return (
        <Router>
          <Navbar />
          <MobileNavbar className='mobile'/>
          <Switch>
            <Route path='/cole-ramey-resume/' exact component={Home} />
            <Route path='/cole-ramey-resume/resume' component={Resume} />
            <Route path='/cole-ramey-resume/personal-projects' component={PersonalProjects} />
            <Route path='/cole-ramey-resume/cover-letter' component={CoverLetter} />
          </Switch>
        </Router>
  );
}

export default App;
