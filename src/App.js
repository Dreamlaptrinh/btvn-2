import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Reputation from './components/pages/Reputation';
import NewUsers from './components/pages/NewUsers';
import Voters from './components/pages/Voters';
import Editors from './components/pages/Editors';
import Moderators from './components/pages/Moderators';
import Welcome from './components/Welcome';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Welcome />}>
          <Route path='/Home' element={<Home />}/> 
          <Route path='/Reputation' element={<Reputation />}/>
          <Route path='/NewUsers' element={<NewUsers/>}/>
          <Route path='/Voters' element={<Voters />}/>
          <Route path='/Editors' element={<Editors />}/>
          <Route path='/Moderators' element={<Moderators />}/>
          </Route>
      </Routes> 
    </div>
  );
}

export default App;
