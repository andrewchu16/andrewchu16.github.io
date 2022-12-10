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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/coop" element={<Coop />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/film-review" element={<FilmReview />} />
      </Routes>
    </HashRouter>
  );
}

export default App
