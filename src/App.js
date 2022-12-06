
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* All our routes go in here */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;