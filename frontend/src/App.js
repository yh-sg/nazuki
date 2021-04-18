import './App.css';
import {useState, useEffect} from 'react' 
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import {Container} from 'react-bootstrap'
import UserPage from './components/User/UserPage'
import {Switch,BrowserRouter as Router,Route,Redirect} from "react-router-dom";

function App() {

  const [isProfile, setIsProfile] = useState(false),
    [name, setName] = useState('');

  const loginHandler = (name) => {
    if(name==="andy"){
      setIsProfile(true);
      localStorage.setItem("token", "loggeeddddd");
    }
  }

  useEffect(()=>{
    let isProfile = localStorage.getItem('token')
    if(isProfile==='loggeeddddd'){
      setIsProfile(true);
      setName("andy")
    }
  },[])

  return (
    <>
    <Router>
      <Header />
        <Container>

        {/* login(name) */}
          <Switch>
            <Route 
              path="/"
              exact
              // component={Home}
              render={()=>
                isProfile ? <Redirect to="/home"/> : <Home login={loginHandler}/>}
            />
        
        {/* homepage */}
            <Route 
              path="/home"
              exact
              render={()=>
                isProfile ? <UserPage name={name}/> : <Redirect to="/"/>}
            />
        
        {/* Handle All other undefined path */}
          <Route path='*' exact component={NotFound}/>
          </Switch>

        </Container>
      </Router>
    </>
  );
}

export default App;
