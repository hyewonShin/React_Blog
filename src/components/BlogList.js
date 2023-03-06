import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useHistory } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

const BlogList = ({ isAdmin }) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = (page = 1) => {
    axios
      .get(`http://localhost:3001/posts?`, {
        params: {
          _page: page,
          _limit: 5,
          _sort: "id",
          _order: "desc",
        },
      })
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      });
  };

  const delteBlog = (e, id) => {
    e.stopPropagation();
    console.log("delete blog");
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    <LoadingSpinner />;
  }

  if (posts.length === 0) {
    return <div>"No blog posts found"</div>;
  }

  const renderBlogList = () => {
    return posts
      .filter((post) => {
        return isAdmin || post.publish;
      })
      .map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            onClick={() => history.push(`/blogs/${post.id}`)}
          >
            {isAdmin ? (
              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => delteBlog(e, post.id)}
                >
                  Delete
                </button>
              </div>
            ) : null}
          </Card>
        );
      });
  };

  return (
    <div>
      {renderBlogList()}
      <Pagination />
    </div>
  );
};

BlogList.propTypes = {
  isAdmin: PropTypes.bool,
};

BlogList.defaultProps = {
  isAdmin: false,
};

export default BlogList;
