import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';




function App() {

  return (
    
    <div className="App">

      <BrowserRouter>
        <Switch>
          
          <Route exact path='/'>
            <Home/>
          </Route>
          
          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
