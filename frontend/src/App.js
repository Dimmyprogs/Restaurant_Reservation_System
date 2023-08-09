import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing';

const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
