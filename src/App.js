import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Switch : 해당하는 경로로 진입하면 다음 경로들은 자동으로 무시됌 */}
      <div className="container">
        <Switch>
          {/* exact : 경로가 정확히 "/" 인 경우에만 home으로 이동 */}
          <Route path="/" exact>
            Home Page
          </Route>
          <Route path="/blogs">
            <BlogForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
