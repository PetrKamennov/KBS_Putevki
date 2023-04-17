import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Link, Routes } from "react-router-dom";
import Orlenok from './pages/Orlenok';
import Uslada from './pages/Uslada';



function App() {


  
  return (
    <>
      <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Orlenok />} />
          <Route path="/uslada" element={<Uslada />} />
        </Routes>
    </>
  );
}

export default App;
