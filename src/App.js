import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import {  Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { selectUser } from "./features/appSlices";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  return (
    <div className="App">
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<WebcamCapture />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chats/view" element={<ChatView />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
