
import axios from "axios";
import {
  ADD_TASK,
  EDIT_TASK,
  EDIT_USER,
  GET_TASK,
  GET_USER,
  LOGIN_USER,
  POST_USER,
  REMOVE_TASK,
  RESET_USER,
  STATUS_HANDLE,
} from "./actiontype";

export const getUser = (id) => async (dispatch) => {
    // console.log(id)
    try {
      const user = await axios.get(`https://asynq-onpv.onrender.com/user/${id}`);
  
      // // const userObj = {
      // //   userid:user.data.user_present._id,
      // //   username: user.data.user_present.userName,
      // //   fullname: user.data.user_present.fullName,
      // //   avatar:user.data.user_present.avatar
      // // };
      // localStorage.setItem("userdata", JSON.stringify(userObj));
      dispatch({
        type: GET_USER,
        payload: user.data[0],
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const addUser = (user) => async (dispatch) => {
    try {
      const res = await axios.post(`https://asynq-onpv.onrender.com/user/signup`, {
        ...user,
      });
      // console.log(res.status);
      dispatch({
        type: POST_USER,
        payload: res.status,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: RESET_USER,
        payload: err.response.status,
      });
    }
  };
  
  // <------------ Login User ---------------------->
  export const LoginUser = (user) => async (dispatch) => {
    console.log(user);
    try {
      const res = await axios.post(`https://asynq-onpv.onrender.com/user/login`, {
        ...user,
      });
      console.log(res.data);
      // console.log(res.data.token);
  
      const userObj = {
        userid:res.data.user_present._id,
        username: res.data.user_present.userName,
        fullname: res.data.user_present.fullName,
        avatar:res.data.user_present.avatar
      };
  
      // console.log(userObj)
      
      localStorage.setItem("userdata", JSON.stringify(userObj));
  
      localStorage.setItem("Token", res.data.token);
      dispatch({
        type: LOGIN_USER,
        payload: {
          currUser: res.data.user_present,
          statuscode: res.status,
          token: res.data.token,
        },
      });
    } catch (err) {
      dispatch({
        type: RESET_USER,
        payload: err.status,
      });
    }
  };
  
  export const setUser = (_id) => async (dispatch) => {
    try {
      const res = await axios.get(`https://asynq-onpv.onrender.com/user/${_id}`);
      // console.log(res);
      dispatch({
        type: LOGIN_USER,
        payload: { currUser: res.data[0], statuscode: res.status },
      });
    } catch (err) {
      dispatch({
        type: RESET_USER,
        payload: err.response.status,
      });
    }
  };
  
  export const editUser = (user,id) => async (dispatch) => {
    console.log(user,id)
    try {
     const resp= await axios.patch(`https://asynq-onpv.onrender.com/user/editUser/${id}`, {
        ...user,
      });
      // console.log(resp)
      // dispatch({
      //   type: EDIT_USER,
      //   payload: user,
      // });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const editAvatar = (avatar,id) => async (dispatch) => {
    console.log(avatar,id)
    try {
     const resp= await axios.patch(`https://asynq-onpv.onrender.com/user/avatar/${id}`, avatar);
      // console.log(resp)
      // dispatch({
      //   type: EDIT_USER,
      //   payload: user,
      // });
    } catch (err) {
      console.log(err);
    }
  };



// Task Action Handling start from here ------------------>

export const Addtask = (task) => async (dispatch) => {
  try {
    console.log("Task to be added:", task);

    // Retrieve token from localStorage
    const token = localStorage.getItem("Token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    console.log("Token:", token);

    // Make sure token is included in the request headers
    const objtoken = {
      config,
    };

    // Send POST request to create a new task
    const resp = await axios.post(
      `https://asynq-onpv.onrender.com/task/createTask`,
      task,
      config
    );

    console.log("Response:", resp.data);

    // Dispatch action to add the new task to the Redux store
    dispatch({
      type: ADD_TASK,
      payload: resp.data,
    });
  } catch (err) {
    // Handle errors
    console.error("Error:", err);
  }
};

export const getTaskData = (page,limit) => async (dispatch) => {
  const token = localStorage.getItem("Token");
  if(!token){
    return  
  }
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const gettask = await axios.get(
      `https://asynq-onpv.onrender.com/task/getTask?page=${page}&limit=${limit}`,
      config
    );
    console.log(gettask.data.tasks);
    dispatch({
      type: GET_TASK,
      payload: gettask.data.tasks,
    });
  } catch (err) {
    console.log(err);
  }
};

export const RemoveTask = (_id) => async (dispatch) => {
  const token = localStorage.getItem("Token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const resp = await axios.delete(
      `https://asynq-onpv.onrender.com/task/deleteTask/${_id}`,
      config
    );
    dispatch({
      type: REMOVE_TASK,
      payload: _id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editTask = (updatedTaskData,taskId) => async (dispatch) => {
  console.log(updatedTaskData)
  const token = localStorage.getItem("Token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    // Send PATCH request to update the task
    const response = await axios.patch(
      `https://asynq-onpv.onrender.com/task/updatetask/${taskId}`,
      updatedTaskData,config
    );
   console.log(response.data)
    dispatch({
      type: EDIT_TASK,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error editing task:", error);
    // Handle error if necessary
  }
};

export const statuschange = (taskId, updatedTaskData) => async (dispatch) => {
  console.log(updatedTaskData)
  const token = localStorage.getItem("Token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    // Send PATCH request to update the task
    const response = await axios.patch(
      `https://asynq-onpv.onrender.com/task/updatetask/${taskId}`,
      updatedTaskData,config
    );
   console.log(response.data)
    dispatch({
      type: STATUS_HANDLE,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error editing task:", error);
    // Handle error if necessary
  }
};

