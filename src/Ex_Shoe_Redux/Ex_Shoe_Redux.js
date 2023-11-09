// Ex_Shoe_Redux.js
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { viewDetail, removeShoe, addToCart } from './actions';
import Cart_Shoe from './Cart_Shoe'
import List_Shoe from './List_Shoe'
import Detail_shoe from './Detail_shoe'
import { shoeArr } from './data'

class Ex_Shoe_Redux extends Component {
    // ...

    render() {
      return (
        <div className='row'>
          <div className="col-6">
            <Cart_Shoe cart={this.props.cart} handleRemove={this.props.removeShoe} />
          </div>
          <div className="col-6">
            <List_Shoe handleCart={this.props.addToCart} />
          </div>
          <div className="col-12">
            <Detail_shoe />
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};

const mapDispatchToProps = {
  viewDetail,
  removeShoe,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ex_Shoe_Redux);
