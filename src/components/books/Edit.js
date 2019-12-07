import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchBook, editBook } from "../../actions";
import BookForm from "./Form";

class BookEdit extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }
  onSubmit = formValues => {
    this.props.editBook(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.book) {
      return <div>Carregando...</div>;
    }
    return (
      <div>
        <h3>Edita livro</h3>
        <BookForm
          initialValues={_.pick(this.props.book, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchBook, editBook })(BookEdit);
