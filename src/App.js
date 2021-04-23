import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AddContact from './pages/contact/AddContact';
import EditContact from './pages/contact/EditContact';
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

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
      <TheFooter></TheFooter>
    </BrowserRouter>
  );
}

export default App;
