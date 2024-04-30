import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';

function App() {
  return (
   <Routes>
      <Route   path='/' element={<Home />} />
   </Routes>
  );
}

export default App;
