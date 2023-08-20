import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBarMenu from './menus/AppBarMenu';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <div className="App">
      <AppBarMenu />
      <BrowserRouter>
        <Routes>
          <Route path="info-page" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
