import { useEffect, useState } from "react";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { Routes, Route, json } from "react-router-dom";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";

export function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <button>Get Todos</button>
      <button>Get Posts</button>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts postsList={posts} />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}
