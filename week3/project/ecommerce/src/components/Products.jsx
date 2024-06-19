import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles/products.css'
import { useFavorites } from "../contexts/FavoritesContext.jsx";

function Products({ selectedCategory, favoritesOnly }) {
    const { favorites, toggleFavorite } = useFavorites();

    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoadingProducts(true);
        async function fetchData() {
          try {
            if (favoritesOnly) {
              const favoriteUrls = favorites.map((id) => `https://fakestoreapi.com/products/${id}`);
              const responses = await Promise.all(
                favoriteUrls.map((url) => fetch(url))
              );
              const data = await Promise.all(
                responses.map((res) => {
                  if (!res.ok) {
                    throw new Error("Error fetching data!");
                  }
                  return res.json();
                })
              );
              setProducts(data);
            } else {
              const url = selectedCategory
                ? `https://fakestoreapi.com/products/category/${selectedCategory}`
                : "https://fakestoreapi.com/products";
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error("Error fetching data!");
              }
              const data = await response.json();
              setProducts(data);
            }
          } catch (error) {
            console.error('Error fetching products:', err);
            setError(err);
          } finally {
            setLoadingProducts(false);
          }
        }
    
        fetchData();
      }, [selectedCategory, favoritesOnly, favorites]);

    return (
        <div className="products-container">
            <ul className='products'>
                {loadingProducts ? <div className="loadingProducts">Loading Products ...</div> : error ? <div>Error: {error.message}</div> :
                    (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )
                }
            </ul>
        </div >
    );
}

export default Products;