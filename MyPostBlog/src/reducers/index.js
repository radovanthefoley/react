import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import PostsReducer from './reducer_posts';

// formReducer has to be mapped to form key!
const rootReducer = combineReducers({posts: PostsReducer, form: formReducer});

export default rootReducer;
