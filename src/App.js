import './App.css';
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/post/:id" element={<PostDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
