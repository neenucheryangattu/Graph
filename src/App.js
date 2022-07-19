import logo from './logo.svg';
import './App.css';
import Charts from './Presentation/Chart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
          <Router>
          <Charts/>
          </Router>
    
    </div>
  );
}

export default App;
