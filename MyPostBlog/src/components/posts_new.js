import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class PostsNew extends Component {

  // field attribute is send by redux-form logic for us to manually hook it
  renderField(field) {
    // ES6 advanced destructuring, meta from field (not accesible though) and
    // touched and error from meta
    const {
      meta: {
        touched,
        error
      }
    } = field;
    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`;

    // {...field.input} maps all attributes of field.input to the same keys e.g.:
    // onBlur = field.input.onBlur; {field.meta.error} is passed by redux based on
    // validate function
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input}/>
        <div className="text-help">{
            touched
              ? error
              : ''
          }</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    // handleSubmit comes from redux form (with many others)
    const {handleSubmit} = this.props;
    // same as: const handleSubmit = this.props.handleSubmit;

    return (
      // arbitrary attributes to be passed within field, here it is label; component
      // expects function reference that return JSX; handleSubmit expects reference to
      // function that will be called during submit
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="Post Content" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Save</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
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
