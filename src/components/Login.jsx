import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext } from "react";

import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios.post(
        `${server}/users/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("error.response.data.message");
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
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type={"email"}
            required
            focusBorderColor="#25c366"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type={"password"}
            required
            focusBorderColor="#25c366"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
          </Button>
          <Button variant={"solid"} type={"submit"} bgColor={"#25c366"}>
            Log In
          </Button>
          <Text alignSelf={"flex-end"}>
            New Uses?{" "}
            <Button variant={"link"} alignSelf={"flex-end"}>
              <Link to={"/register"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
