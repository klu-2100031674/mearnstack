import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDetails from "./components/UserDetails";
import Reset from "./components/Reset";
import Home from './components/Home';
import Movies from "./components/Movies";
import { Container } from "reactstrap";
import AdminHome from "./components/AdminHome";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Artist from "./components/Artist";
import Events from "./components/Events";
import News from "./components/News";
import AddPost from "./components/AddContact";
import Index from "./components/Home/index";
import EditContact from "./components/EditContact";
function App() {
  return (
    <Container >
    <Router>
      <div className="App" >
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
           <Route exact path="/home" component={() => <Index />} />
          <Route exact path="/add" component={() => <AddPost />} />
          <Route exact path="/edit/:id" component={() => <EditContact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pro" element={<UserDetails />} />
          <Route path="/eve" element={<Events />} />
          <Route path="/new" element={<News />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/mov" element={<Movies />} />
          <Route path="/abo" element={<Aboutus/>} />
          <Route path="/con" element={<Contact/>} />
          <Route path="/art" element={<Artist/>} />
          <Route path ="/admin" element={<AdminHome></AdminHome>}/>

        </Routes>
      </div>
    </Router>
    </Container>
  );
}

export default App;