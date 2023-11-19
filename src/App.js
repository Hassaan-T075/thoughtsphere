import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Homepage from './screens/home/Homepage';


function App() {
  return (
<Router>
      <div className="App">
        <Routes>
          <Route exact path="/auth/login" element={<Login />}></Route>
          <Route exact path="/auth/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Homepage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
