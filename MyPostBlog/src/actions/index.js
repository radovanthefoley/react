import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = 'key=s0meth1ngUn1que3456';

export function fetchPosts() {
  console.log("fetchPosts action...");
  const request = axios.get(`${ROOT_URL}/posts?${API_KEY}`);
  // redux-promise middleware will resolve request promise before it hits reducers
  return {type: FETCH_POSTS, payload: request}
}

export function createPost(values, callback) {
  console.log("fetchPosts action...");
  const request = axios
    .post(`${ROOT_URL}/posts?${API_KEY}`, values)
    .then(() => callback());
  // redux-promise middleware will resolve request promise before it hits reducers
  return {type: CREATE_POST, payload: request}
}
