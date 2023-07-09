import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  keyframes,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CgScrollV } from "react-icons/cg";
import { BiTask, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const scrolll = keyframes`
  from{
    transform: translateY(20px);
  }to{
    transform:translateY(0px);
  }
  `;

const Home = () => {
  const scrollAnimation = `${scrolll} infinite 2s ease-out alternate`;

  return (
    <>
      <Flex
        p={["4", "none"]}
        w={"full"}
        h={"100vh"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading size={"4xl"}>
          Welcome, to <span style={{ color: "#25d366" }}>React</span> Todos
          <span style={{ color: "#25d366" }}>!</span>
        </Heading>
        <Heading lineHeight={"taller"} size={"md"} m={"1rem"}>
          A <span style={{ color: "#25d366" }}>Full Stack </span>
          Task Management App.
        </Heading>
        <Box pos={"absolute"} top={"40%"} animation={scrollAnimation}>
          <CgScrollV size={"30"} color={"#25d366"} />
        </Box>
        <Button
          bgColor={"#25c366"}
          w="15rem"
          h={"5rem"}
          m={"2rem"}
          borderRadius={"full"}
          fontSize={"20px"}
          textTransform={"uppercase"}
        >
          <Link to={"/register"}>
            <Heading size={"s"} letterSpacing={"wider"}>
              {" "}
              Get Started
            </Heading>
          </Link>
        </Button>
      </Flex>
      <Flex
        p={["4", "none"]}
        w={"full"}
        h={"80vh"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={["column", "row"]}
      >
        <HStack>
          <VStack>
            <Heading size={"lg"}>Set Reminders</Heading>
            <Text>Add Tasks in Easy and Simple Way</Text>
          </VStack>
          <BiTask size={100} color={"red"} />
        </HStack>
        <HStack>
          <VStack>
            <Heading size={"lg"}>Be Productive</Heading>
            <Text>The Art of Getting Things Done</Text>
          </VStack>
          <BiUser size={100} color={"red"} />
        </HStack>
      </Flex>
    </>
  );
};

export default Home;
