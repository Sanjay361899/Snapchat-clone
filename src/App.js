import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import {  Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<WebcamCapture />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/chats" element={<Chats />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
