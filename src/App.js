// import logo from './logo.svg';
import './App.css';
import TopBar from "./Components/TopBar";
import {Route, Routes} from "react-router";
import ChatRoom from "./Components/ChatRoom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import CreateChatroom from './Components/CreateChatroom';

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chatroom" element ={<ChatRoom/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/create_chatroom' element={<CreateChatroom/>} />

      </Routes>
    </div>
  );
}

export default App;
