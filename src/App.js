import "./assets/sass/app.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MainRoute } from "./components/Routes";
import ProductsPage from "./pages/ProductsPage";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <MainRoute exact path="/" component={ProductsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
