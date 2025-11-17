import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChampionsPage from './pages/ChampionsPage';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomepPage';
import ChampionPage from './Pages/ChampionPage';
import SearchPage from './Pages/SearchPage';
import RegionsPage from './Pages/RegionsPage';
import RegionPage from './Pages/RegionPage';
import QuizPage from './Pages/QuizPage';
import RelationsPage from './Pages/RelationsPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/champions' element={<ChampionsPage />}></Route>
          <Route path='/champion/:id' element={<ChampionPage />}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/regions' element={<RegionsPage />}></Route>
          <Route path='/region/:id' element={<RegionPage />}></Route>
          <Route path='/quiz' element={<QuizPage />}></Route>
          <Route path='/relations' element={<RelationsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;