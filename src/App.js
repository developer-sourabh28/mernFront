import './App.css';
import Signup from './components/SignupForm';
import Login from './components/LoginForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
