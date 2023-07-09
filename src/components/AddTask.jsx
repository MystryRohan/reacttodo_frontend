import {
  Container,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Context, server } from "../main";

const AddTask = () => {
  // const { setAllTask } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${server}/task/new`,
        { title, description },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setTitle("");
      setDescription("");
      // setAllTask(res.data.tasks);
    } catch (error) {
      toast.error("Failed to Add Task, Try Logging Again");
    }
  };
  return (
    <Container h={"100vh"} maxW={"container.xl"} padding={"16"}>
      <form onSubmit={submitHandler}>
        <VStack
          alignItems={"stretch"}
          spacing="8"
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Add Your Task!</Heading>
          <Input
            placeholder={"Title"}
            type={"text"}
            focusBorderColor="#25c366"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder={"Description"}
            type={"text"}
            focusBorderColor="#25c366"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant={"solid"} type="submit" bgColor={"#25c366"}>
            Save Todo
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default AddTask;
