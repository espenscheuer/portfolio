import React, {useState} from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/header.js'
import Home from './components/home.js'
import Footer from './components/footer.js'
import { BrowserRouter, Route} from 'react-router-dom'
import About from './components/about.js'
import Madrona from './components/madrona.js'
import Workday from './components/workday.js'
import Mobility from './components/mobility.js'
import Nomadic from './components/nomadic'
import './App.css';

function App() {  
  return (
  <ParallaxProvider>
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/madrona" exact component={Madrona} /> 
          <Route path="/workday" exact component={Workday} /> 
          <Route path="/mobility" exact component={Mobility} /> 
          <Route path="/nomadic" exact component={Nomadic} />  
        <Footer/>
      </div>
    </BrowserRouter>
  </ParallaxProvider>
  );
}

export default App;
