import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";
import Toast from "./components/Toast";
import useToast from "../src/hooks.js/toast";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const toasts = useSelector((state) => state.toast.toasts);
  const { deleteToast } = useToast();

  return (
    <Router>
      <NavBar />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className="container mt-3">
        <Switch>
          {routes.map((route) => {
            if (route.auth) {
              return (
                <ProtectedRoute
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              ></Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
