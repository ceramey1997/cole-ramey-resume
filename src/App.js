import './App.css';
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <div className="info">
        <About />
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
