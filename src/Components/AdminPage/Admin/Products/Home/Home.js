import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import AdminProduct from "./AdminProduct";
import * as actions from "./../../../../../Actions";
import Pagination from "./Pagination";
import FilterTable from "./FilterTable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5,
      keyword: "",
      filter: {
        filterName: "",
        filterStatus: 0,
      },
    };
  }

  componentDidMount() {
    this.props.onGetProducts();
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
  };

  onDeleteProduct = (id) => {
    this.props.onDeleteProduct(id);
  };

  onFilter = (filterName, filterStatus) => {
    this.setState({
      filter: {
        filterName: filterName.toLowerCase(),
        filterStatus: parseInt(filterStatus),
      },
    });
  };

  listProduct = (products) => {
    return products.map((product, index) => {
      return (
        <AdminProduct
          product={product}
          onChangeStatus={this.onChangeStatus}
          key={index}
          index={index}
          onDeleteProduct={this.onDeleteProduct}
        />
      );
    });
  };

  render() {
    var { products } = this.props;
    var { currentPage, postsPerPage, filter } = this.state;
    if (filter) {
      if (filter.filterName) {
        products = products.filter((product) => {
          return product.name.toLowerCase().indexOf(filter.filterName) !== -1;
        });
      }
      if (filter.filterStatus) {
        products = products.filter((product) => {
          if (filter.filterStatus === 0) {
            return products;
          } else {
            return (
              product.status === (filter.filterStatus === 1 ? true : false)
            );
          }
        });
      }
    }
    var indexOfLast = currentPage * postsPerPage;
    var indexOfFirst = indexOfLast - postsPerPage;
    var currentList = products.slice(indexOfFirst, indexOfLast);
    return (
      <div className="body-admin" id="home">
        <div className="container">
          <div className="title text-center font-family-Ad  my-4">
            <h1 className="">LIST OF PRODUCTS</h1>
          </div>
          <div className="table-content">
            <table className="table border table-home table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Image</th>
                  <th>Name Product</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="list-products">
                <FilterTable onFilter={this.onFilter} />
                {this.listProduct(currentList)}
              </tbody>
            </table>
          </div>

          <div className="bottom d-flex justify-content-center">
            <Pagination
              totalProduct={products.length}
              postsPerPage={postsPerPage}
              paginate={this.paginate}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetProducts: () => {
      dispatch(actions.acFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actions.acDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
