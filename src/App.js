import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Products from './pages/products';
import Suppliers from './pages/suppliers';

import Layout from './components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/suppliers" exact >
          <Suppliers />
        </Route>
        <Route path="/products" exact >
          <Products />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
