import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Update from './components/Update';
import Home from './components/Home';
import Up from './components/Update';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signup' element={< Signup />} />
      <Route path='/up' element={< Up />} />
      <Route path='/home' element={< Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
