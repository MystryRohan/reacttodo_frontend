import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Context, server } from "../main";
import Task from "./Task";

const MyTasks = () => {
  const { user, setAllTask } = useContext(Context);
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/task/${id}`,
        {},
        { withCredentials: true }
      );
      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error("Update Failed!");
      setRefresh((prev) => !prev);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/task/${id}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error("Delete Failed!");
      setRefresh((prev) => !prev);
    }
  };

  useEffect(() => {
    axios
      .get(`${server}/task/mytasks`, { withCredentials: true })
      .then((res) => {
        setTasks(res.data.tasks);
        setAllTask(res.data.tasks);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [refresh]);

  return (
    <Container
      w={["full", "container.xl"]}
      h={"100vh"}
      p={["none", "16"]}
      pt={["16", "none"]}
      left={["0rem", "9rem"]}
    >
      <Heading p={"2rem"}>{`Hello,${user.name}`}</Heading>
      {tasks.map((data) => (
        <Task
          key={data._id}
          title={data.title}
          description={data.description}
          isCompleted={data.isCompleted}
          updateHandler={updateHandler}
          id={data._id}
          deleteHandler={deleteHandler}
        />
      ))}
    </Container>
  );
};

export default MyTasks;
