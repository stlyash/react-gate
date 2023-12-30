import GateBanner from './GateBanner.js'
import LoginPage from './LoginPage.js'
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <GateBanner />
        <LoginPage />
      </div>
    </Router>
  );
}

export default App;
