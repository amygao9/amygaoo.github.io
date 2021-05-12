import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/navbar/Navbar'
import Landing from './pages/landing/Landing'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'
function App() {
  return (
    <>
      <Router>
        <MyNavbar/>
          <Switch>
            <Route path = '/' exact component = {Landing}/>
            <Route path = '/home' component = {Landing}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/projects' component = {Projects}/>
            <Route path = '/skills' component = {Skills}/>
          </Switch>
      </Router>
      
    </>
  );
}

export default App;
