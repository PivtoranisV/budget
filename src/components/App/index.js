import { Route, Routes, Link } from 'react-router-dom';
import Home from '../Home';
import Statistics from '../Statistics';
import About from '../About';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
