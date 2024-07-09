// import logo from './logo.svg';
import './App.css';
import TopBar from "./Components/TopBar";
import {Route, Routes} from "react-router";
import ChatRoom from "./Components/ChatRoom";
import Home from "./Components/Home";
import NumberSumUp from "./Components/NumberSumUp";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chatroom" element ={<ChatRoom/>}/>
          <Route path="/sumupnum" element ={<NumberSumUp/>}/>
          <Route path="/login" element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
