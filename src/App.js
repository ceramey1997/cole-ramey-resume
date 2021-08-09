import { Route } from "react-router-dom"
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
            <Route path='/' exact component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='cole-ramey-resume/personal-projects' component={PersonalProjects} />
            <Route exact path='/cole-ramey-resume/cover-letter' component={CoverLetter} />
        </div>
  );
}

export default App;
