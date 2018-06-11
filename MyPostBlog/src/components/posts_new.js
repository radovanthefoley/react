import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  // field attribute is send by redux-form logic for us to manually hook it
  renderTitleField(field) {
    // {...field.input} maps all attributes of field.input to the same keys e.g.:
    // onBlur = field.input.onBlur
    return (<div>
      <input type="text" {...field.inpu}/>
    </div>);
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField}/>
      </form>
    );
  }
}

// unique name for form, in case we have multiple forms...
export default reduxForm({form: 'PostsNewForm'})(PostsNew);
