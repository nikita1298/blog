import * as actionTypes from "../actions/actionTypes";

const initialState = {
  blogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BLOG:
      return { ...state, blogs: [...state.blogs, action.payload] };

    case actionTypes.EDIT_BLOG:
      let { index, edtblogs } = action.payload;
      let tempBlogs = [...state.blogs];
      tempBlogs[index] = { ...edtblogs, id: index + 1 };
      return { ...state, blogs: tempBlogs };

    case actionTypes.DELETE_BLOG:
      let bid = action.payload;
      let blogs = [...state.blogs];
      let blog = blogs.filter((item) => item.id !== bid);
      return { ...state, blogs: blog };

    default:
      return state;
  }
};

export default reducer;
