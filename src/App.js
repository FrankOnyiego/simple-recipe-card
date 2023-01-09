import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Routers from "./layout/routes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Router>
          <Routers />
      </Router>
    </div>
  );
}

export default App;
