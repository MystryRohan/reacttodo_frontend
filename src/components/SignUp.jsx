import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { server, Context } from "../main";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      // console.log(`${server}/users/new`);
      const { data } = await axios.post(
        `${server}/users/new`,
        { email, name, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("Some Error");
      setIsAuthenticated(false);
    }
  };
  if (isAuthenticated) return <Navigate to={"/api/v1/task/mytasks"} />;

  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form onSubmit={submitHandler}>
        <VStack
          alignItems={"stretch"}
          spacing="8"
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Welcome</Heading>
          <Input
            placeholder="Email"
            type={"email"}
            required
            focusBorderColor="#25c366"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Name"
            type={"text"}
            required
            focusBorderColor="#25c366"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Password"
            type={"password"}
            required
            focusBorderColor="#25c366"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant={"solid"} type={"submit"} bgColor={"#25c366"}>
            Sign Up
          </Button>
          <Text alignSelf={"flex-end"}>
            Already a user?{" "}
            <Button variant={"link"} alignSelf={"flex-end"}>
              <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
