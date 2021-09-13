import "./assets/sass/app.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MainRoute } from "./components/Routes";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <MainRoute exact path="/" component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
