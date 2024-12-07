import './App.css';
import Login from './Admin/Login';
import {Routes , Route,BrowserRouter as Router} from 'react-router-dom';
// require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/auth/admin/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;