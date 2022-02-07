// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
// import Button from './Components/Button';
import Add from './Pages/Add';
import Header from './Pages/Header';
import Section from './Pages/Section';
import 'bootstrap/dist/css/bootstrap.min.css'
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Section />} ></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
