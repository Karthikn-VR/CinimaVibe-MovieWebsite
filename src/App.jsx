import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MovieHomepage from './CinimaVibe/Home/MovieHomepage';
import AboutUs from './CinimaVibe/Components/Aboutus';
import Pricing from './CinimaVibe/Components/Pricing';
import ContactUs from './CinimaVibe/Components/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter  basename="/CinimaVibe-MovieWebsite/">
    <Routes>
      <Route path='/' element={<MovieHomepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/price' element={<Pricing />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
  );
}
