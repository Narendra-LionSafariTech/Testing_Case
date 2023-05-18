import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ResponsivePage from './components/layout/ResponsivePage';
import Home from './View/Home/Home';
import Converter from './View/CurrencyConverter/ConverteTo';
import RegistrationPage from './View/RegistartionForm/FormValiadtion';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/layout' element={<ResponsivePage />} />
          <Route path='/currency-converter' element={<Converter />} />
          <Route path='/formValidation' element={<RegistrationPage/>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
