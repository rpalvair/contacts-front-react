import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import TheHeader from './components/TheHeader';
import AddContact from './pages/contact/AddContact';
import ContactsList from './pages/contact/ContactsList';
import EditContact from './pages/contact/EditContact';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <TheHeader></TheHeader>
      <Switch>
        <Route exact path="/">
          <ContactsList />
        </Route>
        <Route exact path="/add-contact" component={AddContact}></Route>
        <Route exact path="/edit-contact/:id" component={EditContact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
