import React, { Component } from 'react';
import { Card, Icon, Badge, Button, Col } from 'antd';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Col xs={2} sm={4} md={6} lg={6} xl={6}>
        <div className="cartWrapper">
          <Card
            className="cart"
            title={<span><Icon className="cartIcon" type="shopping-cart" /> Cart</span>}
            extra={<Badge count={this.props.cart.count} />}
          >
            <div className="cartItems">
            {cart.items.reverse().map((cartItem, index) => (
              <div key={index} className="cartItem">
                <span>{cartItem.name}</span>
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{cartItem.size}</td>
                      <td>{cartItem.price}</td>
                      <td>
                        <Button
                          onClick={ () => this.props.removeFromCart(cartItem.id) }
                          style={{ float: 'right' }}
                          type="danger"
                          icon="close"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
            </div>
            <div className="totalPrice">
              <strong>Total:&nbsp;</strong>
              <span>R$&nbsp;</span>
              {cart.total.toString().slice(0,3)},
              {cart.total.toString().slice(3)}
            </div>
          </Card>
        </div>
      </Col>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
      removeFromCart: (id) => {
        dispatch(removeFromCart(id))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);