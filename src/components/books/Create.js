import React, { Component } from "react";
import { connect } from "react-redux";
import { createBook } from "../../actions";
import BookForm from "./Form";

class BookCreate extends Component {
  onSubmit = formValues => {
    this.props.createBook(formValues);
  };
  render() {
    return (
      <div>
        <h3>Criar livro</h3>
        <BookForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { createBook })(BookCreate);
