import React, { Component } from 'react';
import { Row, Menu, Col, Layout, Icon } from 'antd';
import { connect } from 'react-redux';
const { Header, Content, Footer } = Layout;

import { changeMode } from './actions';

// relative import
import Cart from './components/Cart';
import ProductList  from './components/ProductList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <h2><Icon type="rocket" /> Shop</h2>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            onClick={() => this.props.changeMode()}
          >
            <Menu.Item key="1">ALL PRODUCTS</Menu.Item>
            <Menu.Item key="2">ONLY ON SALES</Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrapper">
          <div className="content">
            <Row>
              <Col 
                xs={4} sm={8} md={6} lg={6} xl={6}
              >
                <Cart />
              </Col>
              <Col 
                xs={20} sm={16} md={18} lg={18} xl={18}
              >
                <ProductList />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Challenge © 2017 Created by <strong>Selim Sevencan</strong>.
        </Footer>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
      changeMode: () => {
        dispatch(changeMode())
      }
    }
}

export default connect(null, mapDispatchToProps)(App);