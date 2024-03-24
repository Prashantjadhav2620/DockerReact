
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './login.tsx';
import Signup from './signup.tsx';
import Home from './home.tsx';
import Dashbord from './dashbord.tsx';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/dashbord" element={<Dashbord/>} />
        </Routes>
    </Router>
  )
}

export default App
