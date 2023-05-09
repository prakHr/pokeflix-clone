import React, { useEffect } from 'react';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {useDispatch, useSelector} from 'react-redux';
import { login,logout, selectUser } from './features/userSlice';
function App() {
  const user = useSelector(selectUser);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // console.log("here");
        // console.log(userAuth);
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
        );
      }else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className="app">
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          
      
      <Router forceRefresh={true}>
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>
            <Route path = '/profile'>
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen/>
            </Route>
          </Switch>
      
        )}
      </Router>
    </div>
  );
}

export default App;
