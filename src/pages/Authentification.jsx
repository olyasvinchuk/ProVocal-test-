import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginCard from '../components/LoginCard';
import RegisterCard from '../components/RegisterCard';

function Authentification() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginCard />} />
                    <Route path='/reg' element={<RegisterCard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Authentification;
