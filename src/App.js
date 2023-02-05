import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title,
      body,
    });
  };

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <Switch>
        <Route path="/">Home Page</Route>
        <Route path="/blogs">
          <div className="container">
            <div className="mb-3">
              <label className="form-lable">Title</label>
              <input
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-lable">Body</label>
              <textarea
                className="form-control"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                rows="5"
              />
            </div>
            <button className="btn btn-primary" onClick={onSubmit}>
              Post
            </button>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
