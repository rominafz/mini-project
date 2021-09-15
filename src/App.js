import "./assets/sass/app.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./components/Routes";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailesPage from "./pages/ProductDetailesPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={ProductsPage} />
          <PublicRoute
            exact
            path="/product/:productId/:productTitle"
            component={ProductDetailesPage}
          />
          <PublicRoute path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
