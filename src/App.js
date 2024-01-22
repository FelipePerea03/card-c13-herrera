// Este archivo contiene el componente raíz de mi aplicación.
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import profile from "./images/profile-logo.jpg";




  export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return(
      
      <div className={darkMode ? "app--dark" : "app-light"}>
        <button className="toggle" onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <div className="app--container">
        

        <div className="app--container--two">
        <Header img={profile}/>
        <Main />
        <Footer />
        </div>
        </div>

      </div>
        
    );
  }