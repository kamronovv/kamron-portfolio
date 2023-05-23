import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Aboute from './aboute/Aboute';
import Contact from './contact/Contact';
import NoPage from './noPage/NoPage'


function All () {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Header />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Aboute" element={<Aboute />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Hire-Me!" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default All;
  