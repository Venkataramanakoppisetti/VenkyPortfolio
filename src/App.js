import {Route} from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
  </>
)

export default App
