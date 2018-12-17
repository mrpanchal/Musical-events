import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueINFO from './components/VenueINFO';
import Highlight from './components/Highlight';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
        <div 
        className="App" 
        style={{ 
          height:"1000px", 
          background:'cornflowerblue'
          }}>
            
            <Header />

            <Element name="featured"> 
              <Featured />
            </Element>
            
            <Element name="venueinfo">
              <VenueINFO />
            </Element>

            <Element name="highlights"> 
              <Highlight /> 
            </Element>
            
            <Element name="pricing">
              <Pricing />
            </Element> 
            
            <Element name="Location">
              <Location />
            </Element> 
             
            <Footer />
        </div>
    );
  }
}

export default App;
