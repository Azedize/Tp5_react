import { Routes, Route } from 'react-router-dom'
import Calc from './Compenent/Calc';
import { TodoWrapper } from './Compenent/TodoWrapper';
import Slider from './Compenent/Slider';
import './style_Clc.css'
import Navbar from './Compenent/Navbar';
import Comp4 from './Compenent/Comp4'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Calcilatrice" element={<Calc />} />
        <Route path="/todo" element={<TodoWrapper />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/pagination" element={<Comp4 />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
