import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class BookForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'>
        <Field
          name='title'
          component={this.renderInput}
          label='Digite o título do livro'
        />
        <Field
          name='description'
          component={this.renderInput}
          label='Digite a descrição do livro'
        />
        <button className='ui button primary'>Enviar</button>
      </form>
    );
  }
}

const validate = formValues => {
  const erros = {};
  if (!formValues.title) {
    erros.title = "Você precisa inserir o título";
  }
  if (!formValues.description) {
    erros.description = "Você precisa inserir a descrição";
  }
  return erros;
};

export default reduxForm({
  form: "bookForm",
  validate
})(BookForm);
