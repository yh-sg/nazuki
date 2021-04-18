import './App.css';
import {useState, useEffect} from 'react' 
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import {Container} from 'react-bootstrap'
<<<<<<< HEAD
import UserPage from './components/UserPage'
import Axios from 'axios'
=======
import UserPage from './components/User/UserPage'
>>>>>>> frontEndDesign
import {Switch,BrowserRouter as Router,Route,Redirect} from "react-router-dom";

function App() {

  const [isProfile, setIsProfile] = useState(false),
    [name, setName] = useState('');

  const loginHandler = (name) => {
<<<<<<< HEAD
    Axios.post(`http://localhost:3001/profiles/name`, name)
      .then((res)=>{
        console.log(res);
        localStorage.setItem("token", "loggeeddddd");
        setIsProfile(true);
        setName(res.data.profile.name)
      }).catch((e)=>{
        console.log(name)
        setIsProfile(false);
        console.log(e);
      })
  }

  // useEffect(()=>{
  //   let isProfile = localStorage.getItem('token')
  //   if(isProfile==='loggeeddddd'){
  //     setIsProfile(true);
  //   }
  // },[])
=======
    if(name==="andy"){
      setIsProfile(true);
      sessionStorage.setItem("token", "loggeeddddd");
    }
  }

  useEffect(()=>{
    let isProfile = sessionStorage.getItem('token')
    if(isProfile==='loggeeddddd'){
      setIsProfile(true);
      setName("andy")
    }
  },[])
>>>>>>> frontEndDesign

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
