import React from "react";
import './Jumbotron.css';
const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid" >
    
      <div 
        style={{ position: 'relative', top: '65px', height: '250px', width: '50%', clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center", backgroundColor: 'white'}}
        className="container" >
        {children}
      </div>
    
  </div>
);

export default Jumbotron;
