import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteContextContainer } from "./store/FavoriteContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavoriteContextContainer>
    <Router>
      <App />
    </Router>
  </FavoriteContextContainer>,
  document.getElementById("root")
);
