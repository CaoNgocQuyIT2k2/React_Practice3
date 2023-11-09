import React, { Component } from "react";
import { connect } from "react-redux";

class Item_Shoe extends Component {
  render() {
    let { data, handleCart } = this.props;
    return (
      <div className="col-3">
        <img className="w-100" src={data.image} alt={data.name} />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            handleCart(data);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.handleClickView(data);
          }}
          className="btn btn-info"
        >
          View
        </button>
      </div>
    );
  }
}

//đẩy data lên redux để update store
let mapDispatchToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Item_Shoe);
