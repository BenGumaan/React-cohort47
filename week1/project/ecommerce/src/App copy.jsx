import { useState } from 'react'
import './App.css'
import Category from './components/categories.jsx'
import Product from './components/products.jsx'
import all_products from './fake-data/all-products.js'
import all_categories from './fake-data/all-categories.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title-container">
        <h1>Products</h1>
      </div>
      <div className='categories'>
          {(all_categories.length > 0) && all_categories.map((category, index) => {
              return (
                  <div className='categories--item' key={index}>
                      <p>{category}</p>
                  </div>
              )
          })}
      </div>
      
      <ul className="products">
        {(all_products.length > 0) && all_products.map(product => {
              return (
                <li className="products--item" key={product.id}>
                  <div className="product">
                    <img src={product.image} alt={product.description} className="product--image" />
                    <span className="product--title" title={product.title}>{product.title}</span>
                  </div>
                </li>
                // <div key={product.id}>
                //   <p><strong>Title:</strong> {product.title}</p>
                //   <p>Price: {product.price}</p>
                //   <p>Description: {product.description}</p>
                //   <p>Category: {product.category}</p>
                //   <p>Image: {product.image}</p>
                //   <p>Rate: {product.rating.rate}</p>
                //   <p>Count: {product.rating.count}</p>
                // </div>
              )
        })}
      </ul>
      {/* <div className='all-products'>
        {(all_products.length > 0) && all_products.map(product => {
            return (
              <div key={product.id}>
                <p><strong>Title:</strong> {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Image: {product.image}</p>
                <p>Rate: {product.rating.rate}</p>
                <p>Count: {product.rating.count}</p>
              </div>
            )
          })}
      </div> */}
    </>
  )
}

export default App
