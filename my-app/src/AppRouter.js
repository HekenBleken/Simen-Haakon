import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './HomePage';
import More from './More';
import AboutUs from './AboutUs';

function AppRouter() {
return (
    <BrowserRouter>

        <Routes>

            <Route path="/hjem" element={HomePage} />
        
            <Route path="/omoss" element={AboutUs} />

            <Route path="mer" element={More} />

        </Routes>

    </BrowserRouter>
    );
}

export default AppRouter;