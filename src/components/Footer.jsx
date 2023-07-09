import { Input, HStack, VStack, Button, Heading, Text } from "@chakra-ui/react";
import {
  BiSend,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiCopyright,
} from "react-icons/bi";
const Footer = () => {
  return (
    <HStack
      w={"full"}
      minH={"30vh"}
      justifyContent={"space-evenly"}
      bgColor={"blackAlpha.200"}
      flexDirection={["column", "row"]}
    >
      <HStack w={"full"} px={"6"}>
        <Input
          p={"0"}
          placeholder={"Enter your email here..."}
          focusBorderColor={"none"}
          border={"none"}
          borderRadius={"none"}
          borderBottom={"2px solid #25d366"}
        />
        <Button
          type="submit"
          color={"#25d366"}
          bgColor={"transparent"}
          h={"10"}
          w={"10"}
          p={"0"}
          borderRadius={"full"}
        >
          <BiSend size={"20"} />
        </Button>
      </HStack>
      <VStack w={"full"}>
        <Heading size={"md"}>React Todos</Heading>
        <HStack>
          <BiCopyright fontSize={"14"} /> <Text>2023 Rohan Mistry</Text>
        </HStack>
      </VStack>
      <HStack w={"full"} justifyContent={"center"} alignItems={"center"}>
        <a href="#">
          <BiLogoGithub size={"30"} />
        </a>
        <a href="#">
          <BiLogoInstagram size={"30"} />
        </a>
        <a href="#">
          <BiLogoLinkedin size={"30"} />
        </a>
      </HStack>
    </HStack>
  );
};

export default Footer;
