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
      <nav class="navbar navbar-dark bg-primary">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Switch : 해당하는 경로로 진입하면 다음 경로들은 자동으로 무시됌 */}
      <Switch>
        {/* exact : 경로가 정확히 "/" 인 경우에만 home으로 이동 */}
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/blogs">
          <div className="container">
            <h1>Create a blog post</h1>
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
