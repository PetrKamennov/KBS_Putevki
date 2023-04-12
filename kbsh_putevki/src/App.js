import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Link, Routes } from "react-router-dom";
import Orlenok from './pages/Orlenok';


function App() {
  return (
    <>
      <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Orlenok />} />
        </Routes>
    </>
  );
}

export default App;
