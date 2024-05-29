import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask, editTask, getTaskData, statuschange } from "../../redux/action";
import { useNavigate } from "react-router-dom";

function TaskCard({ title, description, taskdate, _id, status, priority }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const taskdata = useSelector((state) => state.user.Taskdata);
  const pageD = useSelector((state) => state.user.page);
  const limitD = useSelector((state) => state.user.limit);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editTaskDate, setEditTaskDate] = useState(taskdate);
  const [editpriority, setEditpriority] = useState(priority);
  const [isModalOpen, setModalOpen] = useState(false);

  const truncatedDescription = description.split(" ").slice(0, 4).join(" ");

  async function deleteTask(_id) {
    dispatch(RemoveTask(_id)).then(() => {
      dispatch(getTaskData(pageD, limitD));
    });
    toast({
      title: "Task Deleted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  async function handleSubmit() {
    const updatedTask = {
      title: editTitle,
      description: editDescription,
      taskdate: editTaskDate,
      priority: editpriority,
      status,
    };
    dispatch(editTask(updatedTask, _id)).then(() => {
      dispatch(getTaskData(pageD, limitD));
      onClose();
      toast({
        title: "Task Updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  }

  function handleStatus(_id) {
    const formdata = taskdata.filter((el) => el._id === _id);

    if (formdata.length === 0) {
      console.error("Task not found with ID:", _id);
      return; // Exit function if task not found
    }

    const statusobj = {
      ...formdata[0],
      status: !formdata[0].status,
    };

    dispatch(statuschange(_id, statusobj)).then(() => {
      dispatch(getTaskData(pageD, limitD));
    });
  }

  return (
    <div className="w-[95%] mb-4">
      <Card className="text-left">
        <CardHeader className="flex justify-between items-center">
          <Heading size="md">Task Report</Heading>
          <Box className="flex justify-center items-center">
            <Button
              className="mr-2 py-0"
              onClick={() => {
                handleStatus(_id);
              }}
              style={{
                backgroundColor: status ? "green" : "red",
                color: "white",
              }}
            >
              {status ? "Completed" : "Not Completed"}
            </Button>
            <MdEditSquare onClick={onOpen} className="cursor-pointer" />
            <MdDelete
              onClick={() => {
                deleteTask(_id);
              }}
              className="cursor-pointer"
            />
          </Box>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Task
              </Heading>
              <Text pt="2" fontSize="sm">
                {title}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Task Deadline
              </Heading>
              <Text pt="2" fontSize="sm">
                {taskdate}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {truncatedDescription}...{" "}
                <span
                  onClick={() => setModalOpen(true)}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  See more
                </span>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Full Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Task Title"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Deadline of task</FormLabel>
                <Input
                  type="date"
                  value={editTaskDate}
                  onChange={(e) => setEditTaskDate(e.target.value)}
                  placeholder="Task Deadline"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Task Description"
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Priority</FormLabel>
                <Select
                  name="priority"
                  value={editpriority}
                  onChange={(e) => {
                    setEditpriority(e.target.value);
                  }}
                  placeholder="Select priority"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
              </FormControl>

              <Button mt={4} colorScheme="teal" type="submit">
                Update Task
              </Button>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default TaskCard;
