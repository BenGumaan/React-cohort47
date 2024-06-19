import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from "../contexts/FavoritesContext";
import '../styles/productCard.css';
import euroSymbol from "../utils/helpers";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";


function ProductCard({ product }) {

    const { favorites, toggleFavorite } = useFavorites();

    return (
        <li className="products--item">
            <div className='product'>
                <div class="product-image--container">
                    <Link to={`/products/${product.id}`} className="productLink">
                        <img class="product-image" src={product.image} alt={product.title} />
                    </Link>
                    <div class="product-image--favourite-container">
                        <img 
                            class="product-image--favourite" 
                            src={favorites.includes(product.id) ? heartSolid : heartRegular} 
                            alt={favorites.includes(product.id) ? "Solid" : "Regular"} 
                            onClick={() => toggleFavorite(product.id)} 
                        />
                    </div>
                </div>
                <h3 class="product--title">{product.title}</h3>
                <p className="euro-symbol">{euroSymbol} {product.price}</p>
            </div>
        </li>
    );
}

export default ProductCard;