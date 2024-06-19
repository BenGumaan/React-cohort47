import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../contexts/FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import euroSymbol from "../utils/helpers";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { favorites, toggleFavorite } = useFavorites();
    const url = `https://fakestoreapi.com/products/${id}`;
    const { data: product, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    if (!product) return <p>Product not found!</p>;

    return (
        <div class="product-details">
            <div class="title-container">
                <h1 class="title-container--title">{product.title}</h1>
            </div>
            <div class="product-details--information">
                <div class="product-details--image">
                    <div class="product-image--container">
                        <img class="product-image" src={product.image} alt={product.title} />
                        <div class="product-image--favourite-container">
                            <img 
                                class="product-image--favourite" 
                                src={favorites.includes(product.id) ? heartSolid : heartRegular}
                                alt={favorites.includes(product.id) ? "Solid" : "Regular"}
                                onClick={() => toggleFavorite(product.id)}
                            />
                        </div>
                    </div>
                </div>
                <p class="product-details--description">{product.description}</p>
                <p className="euro-symbol">{euroSymbol} {product.price}</p>
            </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );

}

export default ProductDetails;