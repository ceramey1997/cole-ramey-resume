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
            <Route path='/resume' component={Resume} />
            <Route path='cole-ramey-resume/personal-projects' component={PersonalProjects} />
            <Route path='/cole-ramey-resume/cover-letter' component={CoverLetter} />
        </div>
  );
}

export default App;
