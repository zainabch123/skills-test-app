import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./utils/AppContext.jsx";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import PostSection from "./components/PostSection";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/zainabch123/post"
      );

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log("posts", posts);

  return (
    <AppContext.Provider value={{ posts, fetchAllPosts }}>
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
