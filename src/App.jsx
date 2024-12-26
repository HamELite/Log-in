import "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/login";
import Data from "./pages/Barang";
// import Home from "../pages/Barang";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/barang" component={Data} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;