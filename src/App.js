import { Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import PersonalProjects from './components/PersonalProjects';
import CoverLetter from './components/CoverLetter';
import MobileNavbar from "./components/MobileNavbar";

function App() {

  return (
        <div>
          <Navbar />
          <MobileNavbar className='mobile'/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/personal-projects' component={PersonalProjects} />
            <Route exact path='/cover-letter' component={CoverLetter} />
          </Switch>
        </div>
  );
}

export default App;
