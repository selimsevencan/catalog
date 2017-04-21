import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import { addToCart } from '../actions';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    let filteredProducts = this.props.products;
    if (this.props.filterOnSale) {
      filteredProducts = filteredProducts.filter(p => p.on_sale);
    }
    return (
      <div className="productList">
        <Row>
          <Col>
            {filteredProducts.map((product, index) => (
              <ProductItem key={index} product={ product } addToCart={this.props.addToCart} />
            ))}
          </Col>  
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.product.products,
    filterOnSale: state.product.filterOnSale,
  };
}

function mapDispatchToProps(dispatch) {
    return {
      addToCart: (item) => {
        dispatch(addToCart(item))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);