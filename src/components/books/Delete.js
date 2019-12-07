import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";

import { fetchBook, deleteBook } from "../../actions";

class BookDelete extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  renderActions() {
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteBook(this.props.match.params.id)}
          className='ui button negative'>
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }
  renderContent() {
    if (!this.props.book) {
      return "Tem certeza que deseja remover esse livro ?";
    }
    return `Tem certeza que deseja emover esse livro : ${this.props.book.title}`;
  }
  render() {
    return (
      <Modal
        header='Apagar livro'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { book: state.books[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchBook, deleteBook })(BookDelete);
