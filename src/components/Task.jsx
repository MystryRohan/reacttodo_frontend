import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

const Task = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <Card>
      <CardBody>
        <HStack w={["full", "container"]} justifyContent="flex-start">
          <Box w={"inherit"}>
            <Heading size={"xs"}>{title}</Heading>
            <Text fontSize={"sm"} pt={"2"}>
              {description}
            </Text>
          </Box>
          <Checkbox
            size={"lg"}
            colorScheme={"whatsapp"}
            isChecked={isCompleted}
            onChange={() => updateHandler(id)}
          ></Checkbox>
          <Button colorScheme={"whatsapp"} onClick={() => deleteHandler(id)}>
            Delete Task
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Task;
