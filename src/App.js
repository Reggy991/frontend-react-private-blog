import React, { useState } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
        <Nav isAuth={isAuthenticated} setAuth={toggleIsAuthenticated}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blogposts" element={isAuthenticated ? <Blog/> : <Navigate to="/"/>}/>
            <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost/> : <Navigate to="/"/>}/>
            <Route
                path="/profile"
                element={isAuthenticated ? <Profile isAuth={isAuthenticated} setAuth={toggleIsAuthenticated}/>
                    : <Navigate to="/login"/>}
            />
            <Route path="*" element={<PageNotFound/>}/>
            <Route
                path="/login"
                element={<Login isAuth={isAuthenticated} setAuth={toggleIsAuthenticated} />}
            />
        </Routes>
    </div>
  );
}

export default App;