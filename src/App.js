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
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Resume} />
            <Route exact path='/personal-projects' component={PersonalProjects} />
          </Switch>
        </div>
  );
}

export default App;
