import React from 'react'
import ProductList from './ProductList';
import { PRODUCTS } from '../shared/product';
class ProductForm extends React.Component {
    state = {
        products: PRODUCTS
    };

    addProduct = (id) => {
        
    }

    deleteProduct = (id) => {
        this.setState({
            products: [...this.state.products.filter(product => {
                return product.id !== id
            })]
        })
    }
    render() {
        return (
            <div>

                <ProductList products={this.state.products} deleteProduct={this.deleteProduct} />

            </div>
        )
    };
}

export default ProductForm;