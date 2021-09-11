import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DetailInfo from "./pages/DetailInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/about"><AboutPage /></Route>
        <Route path="/todo"><DetailInfo /></Route>
      </Switch>
    </Router>
  );
}

export default App;
