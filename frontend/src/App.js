import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/SearchPhotos/SearchPhotos";
import Profile from "./components/Profile/Profile";
import Notifications from "./components/Notifications/Notifications";
import Explore from "./components/Explore/Explore";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
