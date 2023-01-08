import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Statistics from '../Statistics';
import About from '../About';
import { GlobalStyle } from './styles';
import Header from '../Header';
import Counter from '../Counter';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Counter />
    </>
  );
};

export default App;
