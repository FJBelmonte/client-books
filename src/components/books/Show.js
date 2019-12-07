import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../actions";
class BookShow extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }
  render() {
    if (!this.props.book) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{this.props.book.title}</h1>
        <h5>{this.props.book.description}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchBook })(BookShow);
