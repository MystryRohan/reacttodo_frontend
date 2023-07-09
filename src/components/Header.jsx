import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { BiMenuAltLeft as BiToggleLeft } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
    }
  };
  // if (!isAuthenticated) return <Navigate to={"/"} />;
  return (
    <>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        h={"10"}
        w={"10"}
        p={"0"}
        borderRadius={"full"}
        onClick={onOpen}
        bgColor={"#25d366"}
        // colorScheme={"whatsapp"}
      >
        <BiToggleLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement={"left"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />

          <DrawerHeader>
            <HStack>
              <Text color={"whatsapp.500"}>React</Text> <Text>Todos</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack align={"flex-start"}>
              <Button
                onClick={onClose}
                colorScheme={"whatsapp"}
                variant={"link"}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={"whatsapp"}
                variant={"link"}
              >
                <Link to={"/api/v1/task/new"}>Add Task</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={"whatsapp"}
                variant={"link"}
              >
                <Link to={"/api/v1/task/mytasks"}>My Tasks</Link>
              </Button>{" "}
              onClick={onClose}
              <Button
                onClick={onClose}
                colorScheme={"whatsapp"}
                variant={"link"}
              >
                <Link to={"/api/v1/users/me"}>Profile</Link>
              </Button>
            </VStack>
            {isAuthenticated ? (
              <Button
                pos={"absolute"}
                bottom={"4"}
                onClick={onClose}
                colorScheme={"whatsapp"}
                variant="solid"
              >
                <Link onClick={logoutHandler} to={"/"}>
                  Logout
                </Link>
              </Button>
            ) : (
              <HStack pos={"absolute"} bottom={"4"}>
                <Button onClick={onClose} colorScheme={"whatsapp"}>
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                >
                  <Link to={"/register"}>Sign Up</Link>
                </Button>
              </HStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Header;
