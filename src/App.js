import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Route>
         <h1>yoo</h1>
        <Home />
      </Route>
     
    </div>
  );
}

export default App;
