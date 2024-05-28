import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskData } from "../../redux/action";
import Taskcard from "./Taskcard";
import { Box, Button, Image } from "@chakra-ui/react";
import axios from "axios";

function Taskitem() {
  const dispatch = useDispatch();
  const TaskData = useSelector((state) => state.user.Taskdata);
  const [page, setPage] = useState(1);
  const [limit] = useState(4); // Limit is constant for this pagination
  const [totalPages, setTotalPages] = useState(1); // Initialize to 1 initially
  const taskData = useSelector((state) => state.user.Taskdata);
  const pageD = useSelector((state) => state.user.page);
  console.log(pageD)


async function fetchData() {
    const token = localStorage.getItem("Token");
    if (!token) {
      return;
    }
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      const response = await axios.get(
        `https://taskbackend-u0a1.onrender.com/task/getTask`,
        config
      );
      console.log(response.data);
      const totalTasks = response.data.tasks.length;
      console.log("Total tasks:", totalTasks);
      const calculatedTotalPages = Math.ceil(totalTasks / limit);
      console.log("Calculated total pages:", calculatedTotalPages);
      setTotalPages(calculatedTotalPages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(getTaskData(page, limit));
  }, [page, limit]);


  useEffect(() => {
    fetchData();
  }, []);

  if (!taskData || taskData.length === 0) {
    return (
      <Box position="relative" height="100vh" >
        <Image
          src='https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png'
          objectFit="cover"
        //   width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />
      </Box>
    );
  } else {
    return (
        <>
        <div className="grid lg:grid-cols-4 lg:gap-4 sm:gap-0 md:gap-2 md:grid-cols-2 sm:grid-cols-1">
          {taskData?.map((task, index) => (
            <Taskcard key={index} {...task} />
          ))}
        </div>
  
        {totalPages > 1 && (
          <div className="mt-8">
            <Button disabled={page == 1}  onClick={() => setPage(page - 1)}>
              Prev
            </Button>
            <Button>{page}</Button>
            <Button disabled={page == totalPages} onClick={() => setPage(page + 1)}>
              Next
            </Button>
          </div>
        )}
      </>
    );
  }
}

export default Taskitem;
