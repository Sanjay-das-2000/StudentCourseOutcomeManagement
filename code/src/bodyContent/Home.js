import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { Link} from "react-router-dom"

function Home() {

  return (
    <>
      <Box position="relative" top={"36%"}>
        <Heading
          textAlign={"center"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="9xl"
          fontWeight="extrabold"
        >
          Welcome
        </Heading>
        <HStack justifyContent={"center"} mt={"2%"} spacing="10">
        <Link to="/newcourse"><Button colorScheme='purple' variant='solid'> Add New Course</Button></Link>
        <Link to='/newsession'><Button colorScheme='purple' variant='outline'>Add New Session </Button></Link>
        </HStack>
      </Box>
    </>
  );
}

export default Home;