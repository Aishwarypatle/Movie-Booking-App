import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from '../../pages/Auth';
import LandingPage from "../../pages/LandingPage";



let AppRoutes = () =>
{
    return(
        <>
            <Router>

                <Routes>

                    <Route exact path='/' element={<Auth/>} />

                    <Route exact path='/landing' element={<LandingPage />} />
                    
                </Routes>

            </Router>
        </>
    )
}

export default AppRoutes;