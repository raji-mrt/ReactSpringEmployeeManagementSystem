import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeCompnent from './componenets/ListEmployeeComponent';
import HeaderComponent from './componenets/HeaderComponent';
import FooterComponent from './componenets/FooterComponent';
import CreateEmployeeComponent from './componenets/CreateEmployeeComponent';
import ViewEmployeeComponent from './componenets/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/"  exact component = {ListEmployeeCompnent}></Route>
              <Route path = "/employees" component = {ListEmployeeCompnent}></Route>
              <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
