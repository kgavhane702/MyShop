import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import { Provider } from "react-redux";
import ProductDetails from "./containers/ProductDetails";
import store from "./redux/store";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Provider store={store}>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetails} />
          </Provider>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
