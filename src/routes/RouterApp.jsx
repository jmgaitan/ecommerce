import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';


import Home from '../pages/Home';
import Contacts from '../pages/Contacts';

function RouterApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp