import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Course from '../components/Course';
import CoursesCatalog from '../components/CoursesCatalog'

function CoursesPage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CoursesCatalog />} />
                    <Route path='/course' element={<Course />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default CoursesPage;
