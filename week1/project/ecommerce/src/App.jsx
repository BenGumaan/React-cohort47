import React, { useState } from 'react';
// import './App.css';
import './styles/App.css';
import Categories from './components/Categories';
import Products from './components/Products';


const App = () => {

    const [activeCategory, setActiveCategory] = useState('');

    const handleCategoryClickEvent = (category) => {
        setActiveCategory((currentCategory) => currentCategory === category ? '' : category);
    };

    return (
        <div className="App">
            <h1>Products</h1>
            <Categories
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClickEvent} />

            <Products activeCategory={activeCategory} />

        </div>
    );
}

export default App;