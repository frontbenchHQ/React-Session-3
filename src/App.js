import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectList } from './common/ProjectList';
import { Project } from './pages/Project';
import { Blog } from './pages/Blog';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/blog' component={Blog} />
      </BrowserRouter>
    </div>
  );
}

export default App;







