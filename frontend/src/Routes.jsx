import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateUser from './components/CreateUser';
import Home from './components/Home';



const PageRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<HomePage />}/>
            <Route path='/createuser' element= {<CreateUser/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes;