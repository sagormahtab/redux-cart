import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h4>Hello from Shop</h4>
            {
                products.map(pd=><Product 
                    key = {pd.id}
                    product={pd}
                    addToCart = {addToCart}
                    />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//connect(mapStateToProps, mapDispatchToProps) (Shop)

export default connect(mapStateToProps, mapDispatchToProps) (Shop);