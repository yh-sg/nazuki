import './App.css';
import {useState, useEffect} from 'react' 
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import {Container} from 'react-bootstrap'
import AdminProfile from './components/AdminProfile'
import {Switch,BrowserRouter as Router,Route,Redirect} from "react-router-dom";

function App() {

  const [isProfile, setIsProfile] = useState(false)

  const loginHandler = (name) => {
    if(name==="andy"){
      setIsProfile(true);
      // localStorage.setItem("token", "loggeeddddd");
    }
  }

  // useEffect(()=>{
  //   let isProfile = localStorage.getItem('token')
  //   if(token!=='undefined'){
  //     props.history.push('/')
  //   }
  // },[])

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
                isProfile ? <AdminProfile/> : <Redirect to="/"/>}
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
