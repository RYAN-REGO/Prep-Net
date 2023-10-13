import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import { Route} from 'react-router';
import './App.css';
import { Toaster } from 'react-hot-toast';

//components import

import BatchPrompt from './components/BatchPrompt/BatchPrompt';
import Navbar1 from './components/Navbar1/Navbar1'
import Footer1 from './components/Footer1/Footer1';
import ViewList from './components/ViewList/ViewList';
import InterViewExp from './components/InterViewExp/InterViewExp';
import CreatePost from './components/CreatePost/CreatePost';
import ContactMe from './components/ContactMe/ContactMe';
import Auth from './components/Auth/Auth';
import MyPosts from './components/MyPosts/MyPosts';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';



const App = () => {

  return(
    <div>
      <Toaster/>
    <Router>
      <Routes>
        <Route path='/' element={<div><Navbar1/><BatchPrompt/><Footer1/></div>}/>
        <Route path='/viewList/search' element={<div><Navbar1/><ViewList/><Footer1/></div>}/>    
        <Route path='/viewList/:batchNum/:dept' element={<div><Navbar1/><ViewList/><Footer1/></div>}/>
        <Route path='/posts/:id' element={<div><Navbar1/><InterViewExp/></div>}/>
        <Route path='/ShareExperience' element={<div><Navbar1/><CreatePost/><Footer1/></div>}/>
        <Route path='/viewExp/:id' element={<div><Navbar1/><InterViewExp/></div>}/>
        <Route path='/contactMe' element={<div><Navbar1/><ContactMe/></div>}/>
        <Route path='/auth' element={<div><Auth/></div>}/> 
        <Route path='/MyPosts/:creatorName/:creatorId' element={<div><Navbar1/><MyPosts/><Footer1/></div>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;