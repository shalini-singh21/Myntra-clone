
import './App.css';
// import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import Home from './Components/Home';
import Men from './Components/Men';
import Navbar from './Components/Navbar';
import "./App.css";

// import Women from './Components/Women';
import Studio from './Components/Studio';
import Kids from './Components/Kids';
import Beauty from './Components/Beauty';
import Profile from './Components/Profile';
// import Portfolionav from './Components/Portfolionav';
function App() {


    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path='/Home'
                        element={<Home />}>
                        Home
                    </Route>

                   

                    <Route path='/Men'
                        element={<Men />}>
                    </Route>

                    <Route path='/profile'
                        element={<Profile/>}>
                    </Route>

                    <Route path='/Studio'
                        element={<Studio />}>
                    </Route>

                    <Route path='/kids'
                        element={<Kids />}>
                    </Route>

                    <Route path='/Beauty'
                        element={<Beauty />}>
                    </Route>

                </Routes>
            </Router>
        </>

    )
}
export default App;










