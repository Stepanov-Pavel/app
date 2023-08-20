import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuAppBar from './attic/MenuAppBar';
import InfoPage from './pages/infopage/InfoPage';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="info-page" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
