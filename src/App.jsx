import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Step1 from './pages/Step1';
import Step1_1 from './pages/Step1_1';
import Step1_A from './pages/Step1_A';
import Step1_A1 from './pages/Step1_A1';
import Step1_B from './pages/Step1_B';
import Step2 from './pages/Step2';
import Step2_1 from './pages/Step2_1';
import Step2_2 from './pages/Step2_2';
import Step2_3 from './pages/Step2_3';
import Step3 from './pages/Step3';
import Step3_1 from './pages/Step3_1';
import Step3_2 from './pages/Step3_2';
import Step3_3 from './pages/Step3_3';
import Step4 from './pages/Step4';
import Step4_1 from './pages/Step4_1';
import Step4_2 from './pages/Step4_2';
import Step4_3 from './pages/Step4_3';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import Step7 from './pages/Step7';

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
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step2-1" element={<Step2_1 />} />
        <Route path="/step2-2" element={<Step2_2 />} />
        <Route path="/step2-3" element={<Step2_3 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step3-1" element={<Step3_1 />} />
        <Route path="/step3-2" element={<Step3_2 />} />
        <Route path="/step3-3" element={<Step3_3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step4-1" element={<Step4_1 />} />
        <Route path="/step4-2" element={<Step4_2 />} />
        <Route path="/step4-3" element={<Step4_3 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/step6" element={<Step6 />} />
        <Route path="/step7" element={<Step7 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
