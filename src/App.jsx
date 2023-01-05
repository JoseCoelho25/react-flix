import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/series" element={<SeriesPage />}/>
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path="/contact" element={<ContactUsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
