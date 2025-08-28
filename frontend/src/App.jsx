import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./utils/AppContext.jsx";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import PostSection from "./components/PostSection";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <AppContext.Provider value={{posts}}>
      <div className="container">
        <Header />
        <LeftSidebar />
        <Routes>
          <Route path="/" element={<PostSection />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
