import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  // field attribute is send by redux-form logic for us to manually hook it
  renderField(field) {
    // {...field.input} maps all attributes of field.input to the same keys e.g.:
    // onBlur = field.input.onBlur; {field.meta.error} is passed by redux based on
    // validate function
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.inpu}/> {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      // arbitrary attributes to be passed within field, here it is label; component
      // expects function reference that return JSX
      <form>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="Post Content" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title < 3) {
    errors.title = 'Enter a title that is at least 3 characters please';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories please';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // if errors is empty, redux evaluates form as valid
  return errors;
}

// unique name for form, in case we have multiple forms...
export default reduxForm({validate: validate, form: 'PostsNewForm'})(PostsNew);
