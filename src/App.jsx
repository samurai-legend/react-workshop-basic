import { BrowserRouter, Link } from "react-router-dom";
import { RouterConfig } from "./routes/routeConfig";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Navbar.Item>
          <Link to="/">Home</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/posts">Posts</Link>
        </Navbar.Item>
      </Navbar>
      <RouterConfig />
    </BrowserRouter>
  );
};

export default App;
