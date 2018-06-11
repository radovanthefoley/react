import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  // field attribute is send by redux-form logic for us to manually hook it
  renderField(field) {
    // {...field.input} maps all attributes of field.input to the same keys e.g.:
    // onBlur = field.input.onBlur
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.inpu}/>
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
        <Field name="contenr" label="Post Content" component={this.renderField}/>
      </form>
    );
  }
}

// unique name for form, in case we have multiple forms...
export default reduxForm({form: 'PostsNewForm'})(PostsNew);
