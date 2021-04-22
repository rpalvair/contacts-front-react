import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AddContact from './pages/contact/AddContact';
import EditContact from './pages/contact/EditContact';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar bg="light">
          <Navbar.Brand className="h1 mb-0">My Contacts</Navbar.Brand>
        </Navbar>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add-contact" component={AddContact}></Route>
        <Route exact path="/edit-contact/:id" component={EditContact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <footer className="footer">
        My Contacts - Copyright @2021
      </footer>
    </BrowserRouter>
  );
}

export default App;
