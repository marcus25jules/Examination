import "./styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CustomerList from "./containers/customer";
import CustomerForm from "./containers/customer/form";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id?">
          <CustomerList />
        </Route>
        <Route path="/form/:mode?/:id?">
          <CustomerForm />
        </Route>
      </Switch>
    </Router>
  );
}
