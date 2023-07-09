import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  VStack,
  CardFooter,
  HStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BiCheck, BiCheckDouble } from "react-icons/bi";
import { Context } from "../main";

const Profile = () => {
  const { user, allTask } = useContext(Context);
  let temp = 0;
  if (allTask.length > 0) {
    allTask.map((task) => {
      if (task.isCompleted) {
        temp++;
      }
    });
  }

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#00000022"}
    >
      <Card w={["full", "container.sm"]}>
        <CardBody>
          <VStack justifyContent={"space-around"}>
            <VStack p={"2rem"}>
              <Avatar size={"lg"}></Avatar>
              <Heading size={"lg"}>{user?.name}</Heading>
              <Heading size={"sm"}>React Todo User</Heading>
            </VStack>
            <Heading size={"xs"}>{user?.email}</Heading>
          </VStack>
        </CardBody>
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <VStack>
            <Heading size={"xs"}>{allTask.length}</Heading>
            <HStack>
              <BiCheck size={"20"} color="25c366" />
              <Text> Task Added</Text>
            </HStack>
          </VStack>
          <VStack>
            <Heading size={"xs"}>{temp}</Heading>
            <HStack>
              <BiCheckDouble size={"25"} color="25c366" />
              <Text> Task Completed</Text>
            </HStack>
          </VStack>
        </CardFooter>
      </Card>
    </Flex>
  );
};
export default Profile;
