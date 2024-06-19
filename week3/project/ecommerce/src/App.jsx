import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import FavoritesPage from './pages/FavoritesPage';
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';


function App() {

    return (
        <Router>
            <FavoritesProvider>
                <div className="App">
                    <div class="title-container">
                        <h1 class="title-container--title">Products</h1>
                        <div class="nav">
                            <a class="nav-link" href="/"><Link to="/">Products</Link></a>
                            <a class="nav-link" href="/favourites"><Link to="/favorites">Favorites</Link></a>
                        </div>
                    </div>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </div>
            </FavoritesProvider>
        </Router>
    );
}

export default App;