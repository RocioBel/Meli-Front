
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import SearchBox from './components/SearchBox';
import ResultsList from './components/ResultsList';


function App() {
  let location=useLocation();
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items/:id' component={Detail}/>
        <Route exact path='/items' component={SearchResults} key={location.pathname}/>
      </Switch>

    </div>
  );
}

export default App;
