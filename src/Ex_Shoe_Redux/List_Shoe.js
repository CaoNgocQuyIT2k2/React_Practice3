import React, { Component } from "react";
import Item_Shoe from "./Item_Shoe";
import { connect } from "react-redux";
import { shoeArr } from "./data";

 class List_Shoe extends Component {
  render() {
    const {handleCart} = this.props;
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return (
            <Item_Shoe
              handleCart={handleCart}
              key={index}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
let mapStateToProps =(state) => {
  return {
    list: state.shoeReducer.shoeArr,
  }
}
export default connect(mapStateToProps)(List_Shoe)