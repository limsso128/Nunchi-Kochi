import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Step1 from './pages/Step1';
import Step1_1 from './pages/Step1_1';
import Step1_A from './pages/Step1_A';
import Step1_A1 from './pages/Step1_A1';
import Step1_B from './pages/Step1_B';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step1-1" element={<Step1_1 />} />
        <Route path="/step1-a" element={<Step1_A />} />
        <Route path="/step1-a1" element={<Step1_A1 />} />
        <Route path="/step1-b" element={<Step1_B />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
