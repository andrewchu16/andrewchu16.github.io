import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Coop from './pages/Coop';
import NoPage from './pages/NoPage';
import FilmReview from "./pages/FilmReview";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route index element={<Home />} />
        <Route path="/coop" element={<Coop />} />
        <Route path="/film-review" element={<FilmReview />} />
      </Routes>
    </HashRouter>
  );
}

export default App
