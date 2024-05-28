import {
  EDITING,
  EDIT_TASK,
  EDIT_USER,
  GET_TASK,
  GET_USER,
  LOADING,
  LOGIN_USER,
  LOGOUT_USER,
  NOT_LOADING,
  POST_USER,
  REMOVE_TASK,
  RESET_USER,
} from "./actiontype";

const initialState = {
  user: {},
  loggedIn: false,
  statuscode: "",
  token: "",
  Taskdata: [],
  isLoading: false,
  editformid:"",
  editing:false
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state, user: payload };
    case EDIT_USER:
      return { ...state, user: payload };
    case POST_USER:
      return { ...state, status: payload };
    case LOGIN_USER:
      return {
        ...state,
        user: payload.currUser,
        statuscode: payload.statuscode,
        loggedIn: true,
        token: payload.token,
      };
    case LOGOUT_USER:
      return { ...state, user: {}, loggedIn: false, token: "" };
    case RESET_USER:
      return { ...state, status: payload };
    case LOADING:
      return { ...state, isLoading: true };
    case NOT_LOADING:
      return { ...state, isLoading: false };
    case GET_TASK:
      return { ...state, Taskdata: payload };
    case EDIT_TASK:
      return { ...state, editing:false,editformid:"" };
      case EDITING:
       return {...state,editing:true, editformid:payload.id}
    default:
      return state;
  }
};
