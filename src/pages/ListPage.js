import axios from "axios";
import { useState, useEffect } from "react";

const ListPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>ListPage</div>;
};

export default ListPage;
