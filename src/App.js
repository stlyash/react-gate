import Instructions from './Instructions1.js'
import LoginPage from './LoginPage.js'
import Exam from './Exam.js'
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App