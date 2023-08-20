import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './menus/AppBarMenu';
import Info from './pages/InfoPage';
import Main from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
