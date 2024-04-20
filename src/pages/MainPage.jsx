import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPageGreetings from '../components/MainPageGreetings';

function MainPage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPageGreetings />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainPage;
