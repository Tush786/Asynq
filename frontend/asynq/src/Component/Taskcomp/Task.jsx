import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Addtask, editTask, getTaskData } from "../../redux/action";
import Taskitem from "./Taskitem";

function Task() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskform, setTaskform] = useState({
    title: "",
    taskdate: "",
    priority: "",
    description: "",
  });

  const toast = useToast();
  const dispatch = useDispatch();
  const Editing = useSelector((state) => state.user.editing);
  const Editid = useSelector((state) => state.user.editformid);
  const taskdata = useSelector((state) => state.user.Taskdata);

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedValue =
      name === "taskdate" ? new Date(value).toISOString().split("T")[0] : value;
    setTaskform((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
    console.log("Updated taskform:", taskform); // Log state after each change
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, taskdate, description, priority } = taskform;
    if (!title || !taskdate || !description || !priority) {
      toast({
        title: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (Editing) {
      dispatch(editTask(Editid, taskform)).then(() => {
        dispatch(getTaskData());
      });
    } else {
      dispatch(Addtask(taskform)).then(() => {
        dispatch(getTaskData());
      });
    }

    console.log("Submitted taskform:", taskform); // Log state on form submission

    setTaskform({
      title: "",
      taskdate: "",
      priority: "",
      description: "",
    });
    onClose(); // Close the modal after form submission
  }

  useEffect(() => {
    if (Editing) {
      const formdata = taskdata.find((el) => el._id === Editid);
      if (formdata) {
        setTaskform(formdata);
      }
    }
  }, [Editing, Editid, taskdata]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="lg:w-[90%] md:w-[90%] sm:w-[100%] m-auto border-dashed">
      <Box className="flex justify-end my-4">
        <Button onClick={onOpen}>Add Task</Button>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Editing ? "Edit Task" : "Add Task"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  onChange={handleChange}
                  name="title"
                  placeholder="Enter title"
                  value={taskform.title}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Deadline of task</FormLabel>
                <Input
                  onChange={handleChange}
                  name="taskdate"
                  type="date"
                  placeholder="Enter date"
                  value={taskform.taskdate}
                  min={today}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  onChange={handleChange}
                  name="description"
                  placeholder="Enter description about task"
                  value={taskform.description}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Priority</FormLabel>
                <Select
                  name="priority"
                  value={taskform.priority}
                  onChange={handleChange}
                  placeholder="Select priority"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
              </FormControl>

              <Button mt={4} colorScheme="teal" type="submit">
                {Editing ? "Update Task" : "Add Task"}
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Taskitem />
    </div>
  );
}

export default Task;
