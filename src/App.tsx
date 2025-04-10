import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import CoursePage from './pages/course';
import { LanguageProvider } from './utils/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="p-2">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursePage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;