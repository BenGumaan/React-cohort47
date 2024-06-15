import React from 'react';
import ProductCard from './ProductCard.jsx';
import productsData from '../fake-data/all-products.js';
import '../styles/products.css'


const Products = ({ activeCategory }) => {

    const selectedCategory = activeCategory.replace('FAKE: ', '');

    const filteredProductsData =
        activeCategory 
        ?
        productsData.filter(item => {
            return item.category === selectedCategory
        }) 
        : 
        productsData;

    return (
        <div className="products-container">

            {
                filteredProductsData.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))
            }

        </div >
    );
}

export default Products;