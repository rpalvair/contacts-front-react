import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import TheHeader from './components/TheHeader';
import AddContact from './pages/contact/AddContact';
import EditContact from './pages/contact/EditContact';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <TheHeader></TheHeader>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add-contact" component={AddContact}></Route>
        <Route exact path="/edit-contact/:id" component={EditContact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
