import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import AdminProfile from './components/AdminProfile'
import {Switch,BrowserRouter as Router,Route,Redirect} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
        <div className="container">

          <Switch>
            <Route 
              path="/"
              exact
              component={Home}
            />
          </Switch>
        
          <Switch>
            <Route 
              path="/home"
              exact
              component={AdminProfile}
            />
          </Switch>
       
        </div>
      </Router>
    </>
  );
}

export default App;
