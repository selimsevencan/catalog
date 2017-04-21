import React, { Component } from 'react';
import { Card, Col, Badge, Radio, Button } from 'antd';

const { Button: RadioButton, Group: RadioGroup } = Radio;

class ProductItem extends Component {
  constructor(props) {
    super(props);
    const { product } = props;
    const availableSizes = product.sizes.filter(p => p.available === true);

    this.onSizeChange = this.onSizeChange.bind(this);

    this.state = {
      selectedSize: availableSizes[0],
      availableSizes,
    };
  }

  onSizeChange(e) {
    this.setState({
      selectedSize: this.state.availableSizes.find(p => p.sku === e.target.value)
    });
  }

  render() {
    const { product, addToCart } = this.props;
    const { selectedSize, availableSizes } = this.state;

    const handleAddToCartClick = () => {
      addToCart({
        id: selectedSize.sku,
        name: product.name,
        image: product.image,
        price: product.on_sale ? product.actual_price : product.regular_price,
        size: selectedSize.size,
      })
    };

    return (
      <Col xs={16} sm={12} md={6} lg={6} xl={6}>
          <Card style={{ margin:'10px' }} bodyStyle={{ padding: 0 }}>
              <div className="productImage">
              <img
                alt={ product.name }
                width="100%"
                src={ product.image }
                onError={ (e) => { e.target.src = 'http://placehold.it/470x594';}}
              />
            </div>
            <div className="productDetails">
            <h3>{ product.name }</h3>
            <p className="actualPrice">{ product.actual_price }</p>
            { product.on_sale &&
              (
                [
                  <span key={'regularPrice'} className="regularPrice">{ product.regular_price }</span>,
                  <Badge key={'discountBadge'} count={product.discount_percentage} />
                ]
              )
            }
            <div>
              <p>Avaiable Sizes:</p>
              <RadioGroup onChange={this.onSizeChange} defaultValue={selectedSize.sku}>
                {availableSizes.map((option, index) => (
                  <RadioButton key={index} value={option.sku}>{ option.size }</RadioButton>
                ))}
              </RadioGroup>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Button
                onClick={ handleAddToCartClick }
                type="primary"
                icon="plus"
                size={'large'}
              >Add To Cart</Button>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}

export default ProductItem;