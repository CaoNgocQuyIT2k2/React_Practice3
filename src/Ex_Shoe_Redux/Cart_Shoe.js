// Cart_Shoe.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCartQuantity } from "./actions";

 class Cart_Shoe extends Component {
  render() {
    let { cart, handleRemove, dispatch } = this.props; // Sử dụng dispatch từ props

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img style={{ width: 50 }} src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    dispatch(updateCartQuantity(item.id, -1)); // Sử dụng dispatch
                  }}
                >
                  -
                </button>
                <span className="mx-3">{item.cartQuantity}</span>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    dispatch(updateCartQuantity(item.id, 1)); // Sử dụng dispatch
                  }}
                >
                  +
                </button>
              </td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shoeReducer.cart,
});

export default connect(mapStateToProps)(Cart_Shoe);