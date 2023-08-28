import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardView from 'components/views/dashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DashboardView />} />
        </Routes>
      </Router>
  );
}

export default App;
