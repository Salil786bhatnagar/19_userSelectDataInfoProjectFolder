import React,{useState,useEffect} from 'react';
import './App.css';
import './Custom.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Admin dashboard import file
import Dashboard from './Admin/Dashboard';

// User dahsboard import file
import IndexUser from './component/Index'
import RegForm from './component/Registration';
import Login from './component/Login';
import UserInformation from './component/UserInformation';
// 404 page not funct error page
import NotFoundPage_404 from './component/NotFundPage/NotFoundPage_404';

//use to login bg image
// import Login_Bg_img from './User/NewCompoment/AuthImg/Auth_login_img';

function App(props) {
  // const [showPage, setShowPage] = useState(<MainPageData/>)
  const [auth, setAuth]=useState(false)
  return (
    <div className="App">

      <Router>
          <Switch>
        
                <Route
                    path="/"
                    exact
                    strict
                    component={IndexUser}
                    history={props.history}
                    />

                  <Route
                      path="/RegForm"
                      exact
                      strict
                      component={RegForm}
                      history={props.history}

                      />
                    <Route
                      path="/Login"
                      exact
                      strict
                      component={Login}
                      history={props.history}
                      />

                    <Route
                      path="/UserInformation"
                      exact
                      strict
                      component={UserInformation}
                      history={props.history}
                      />

                <Route
                  path="/Dashboard"
                  exact
                  strict
                  component={Dashboard}
                  history={props.history}
                    />

                    <Route
                      path="*"
                      exact
                      strict
                      component={NotFoundPage_404}
                      history={props.history}
                    />
                   
          </Switch>
    
      </Router>
    </div>
  );
}

export default App;
