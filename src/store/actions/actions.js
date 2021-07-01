import * as actionTypes from "../actions/actionTypes";

export const addBlogsDispatch = (blog) => {
  console.log("object", blog);
  return {
    type: actionTypes.ADD_BLOG,
    payload: blog,
  };
};

export const addBlogs = (data) => {
  return (dispatch) => {
    dispatch(addBlogsDispatch(data));
  };
};

export const editBlogsDispatch = (index, blog) => {
  console.log("object", blog);
  return {
    type: actionTypes.EDIT_BLOG,
    payload: { index, edtblogs: blog },
  };
};

export const editBlogs = (id, data) => {
  return (dispatch) => {
    dispatch(editBlogsDispatch(id, data));
  };
};

export const deleteBlogsDispatch = (id) => {
  return {
    type: actionTypes.DELETE_BLOG,
    payload: id,
  };
};

export const deleteBlogs = (id) => {
  return (dispatch) => {
    dispatch(deleteBlogsDispatch(id));
  };
};
