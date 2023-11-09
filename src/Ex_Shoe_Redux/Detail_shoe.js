import React, { Component } from 'react'
import { connect } from 'react-redux'

class Detail_shoe extends Component {
  render() {
    return (
      <div>
        <img src={this.props.detail.image} alt="" />
      </div>
    )
  }
}
let mapStateToProps =(state) => {
  return {
    detail: state.shoeReducer.detail,
  }
}
export default connect(mapStateToProps)(Detail_shoe)

