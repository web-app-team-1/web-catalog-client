import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import SeriesDetailPage from './pages/SeriesDetailPage/SeriesDetailPage';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <Navbar />
        <div className='menu'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/series' element={<SeriesPage />} />
            <Route exact path='/movie/:id' element={<MovieDetailPage />} />
            <Route exact path='/series/:id' element={<SeriesDetailPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;