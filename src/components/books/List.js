import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../actions";
class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderAdmin(book) {
    return (
      <div className='right floated content'>
        <Link to={`/book/edit/${book.id}`} className='ui button primary'>
          Editar
        </Link>
        <Link to={`/book/delete/${book.id}`} className='ui button negative'>
          Deletar
        </Link>
      </div>
    );
  }
  renderList() {
    console.log(this.props.books);
    return this.props.books.map(book => {
      return (
        <div className='item' key={book.id}>
          {this.renderAdmin(book)}
          <i className='large middle aligned icon book' />
          <div className='content'>
            <Link className='header' to={`/book/${book.id}`}>
              {book.title}
            </Link>
            <div className='description'>{book.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to='/book/new' className='ui button primary'>
          Criar livro
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Livros</h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: Object.values(state.books)
  };
};
export default connect(mapStateToProps, { fetchBooks })(BookList);
