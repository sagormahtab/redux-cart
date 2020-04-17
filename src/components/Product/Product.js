import React from 'react';

const Product = (props) => {
    const {product, addToCart} = props;
    return (
        <div style={{border: '1px solid tomato', marginBottom: '5px'}}>
            <h4>{product.name}</h4>
            <button onClick={()=>addToCart(product.id, product.name)}
            >add to cart</button>
        </div>
    );
};

export default Product;