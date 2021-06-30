import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class Product extends Component {
  render() {
    var { item } = this.props;
    return (
      <div className="col product-item">
        <div className="bgr">
          <img src={item.image} alt="" />
          <div className="item-caption font-family-Ti">{item.name}</div>
          <div className="button-task">
            <Link to={item.to}>
              <button className="btn rounded-0 button-link shadow-none me-3 font-family-Ti">
                Learn More
              </button>
            </Link>
            <button className="btn rounded-0 button-add shadow-none font-family-Ti">
              Compare
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;