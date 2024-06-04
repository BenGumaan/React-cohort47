import React from 'react';
import categoriesArr from '../fake-data/all-categories.js';
import '../styles/categories.css';

const Categories = ({ activeCategory, onCategoryClick }) => {
    return (
        <div className='catContainer' >

            {
              categoriesArr.map((category, index) => {
                
                return <div 
                          key={index} 
                          className={`category ${activeCategory === category ? 'active' : ''}`}
                          onClick={() => onCategoryClick(category)} 
                        >
                          {category}
                        </div>
              })
            }
        </div >
    );
}

export default Categories;