import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Step1 from './pages/Step1';
import Step1_1 from './pages/Step1_1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step1-1" element={<Step1_1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
