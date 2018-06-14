import _ from 'lodash';

import {FETCH_POSTS} from '../actions/index';
import {FETCH_POST} from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      if (action.error) {
        alert('Unable to obtain posts');
        return state;
      } else {
        console.log(action.payload.data);
        return _.mapKeys(action.payload.data, 'id');
      }
    case FETCH_POST:
      if (action.error) {
        alert('Unable to obtain post');
        return state;
      } else {
        console.log(action.payload.data);
        return {
          ...state,
          // ES6 key interpolation []
          [action.payload.data.id]: action.payload.data
        };
      }
  }
  return state;
}
