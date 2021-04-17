import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Navigation from './components/navigation/Navigation';
import Main from './components/mainbody/Main';
import Description from './components/description/Description';
import Secondmain from './components/mainbodysecond/Secondmain';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Notfound from './components/notfound/Notfound';
import Signup from './components/signup/Signup';
import BreakfastFood from './components/foodBreakfast/BreakfastFood'
import Lunch from './components/lunch/Lunch';
import Fooddetail from './components/foodDetails/Fooddetail';


function App() {
  
  return (
    <div className="App">
  
  <Router>
    <Header />
  <Switch>
  <Route path="/foodBreakfast">
      <BreakfastFood/>
    </Route>
    <Route path="/cart">
      <Cart/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/lunch">
      <Lunch/>
    </Route>
    <Route path="/foodDetails/:key">
      <Fooddetail/>
    </Route>
    <Route path="/">
    <Banner/>
    <Navigation />
      <Main />
      <Description />
      <Secondmain /> 
    </Route>
    <Route path="*">
      <Notfound/>
    </Route>
  </Switch>

</Router>
<Footer /> 
     </div>
  );
}

export default App;

  
{/* <Navigation /> */}
{/*   <Main />
  <Description />
  <Secondmain /> */}
 {/*  <Footer />  */} 

{/* <Router>
<div>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>

  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/topics">
      <Topics />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</div>
</Router> */}