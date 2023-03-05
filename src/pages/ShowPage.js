import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useHistory } from "react-router-dom";

const ShowPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoding] = useState(true);
  const history = useHistory();

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoding(false);
    });
  };

  useEffect(() => {
    console.log("hello");
    getPost(id);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => history.push("/blogs/2")}>Click</button>
    </div>
  );
};
export default ShowPage;
