import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/api";

const StudentCODisplay = (props) => {

    const Navigate = useNavigate();
    const editHandler = () => {
        Navigate(`/edituser/${props.data.id}`)
    }
 
    const deleteHandler = async () => {
        const deleteres = await deleteUser(props.data.id); 
        props.getCOhandler();
        console.log(deleteres.data);
    }
    
    return(
        <>
            <Box backgroundColor={"white"} borderRadius="5px" ml={"2%"} mr={"2%"} mt={"2%"} p={"1.5%"} boxShadow={"1px 1px 4px 1px gray"}>
                <Flex justify={"space-between"}>
                <Box>

                <HStack mb={"1%"}>
                    <Text><strong>Student Name:</strong> {props.data.name}</Text>
                    <Text><strong>Roll No:</strong> {props.data.rollno}</Text>
                </HStack>
                <HStack spacing={10} mb={"1%"}>
                    <Text><strong>Test1 Course Outcomes :</strong></Text>
                    <Text>CO1: {props.data.test1.CO1}</Text>
                    <Text>CO2: {props.data.test1.CO2}</Text>
                    <Text>CO3: {props.data.test1.CO3}</Text>
                    <Text>CO4: {props.data.test1.CO4}</Text>
                    <Text>CO5: {props.data.test1.CO5}</Text>
                </HStack>
                <HStack spacing={10} mb={"1%"}>
                    <Text><strong>Test2 Course Outcomes :</strong></Text>
                    <Text>CO1: {props.data.test2.CO1}</Text>
                    <Text>CO2: {props.data.test2.CO2}</Text>
                    <Text>CO3: {props.data.test2.CO3}</Text>
                    <Text>CO4: {props.data.test2.CO4}</Text>
                    <Text>CO5: {props.data.test2.CO5}</Text>
                </HStack>
                <HStack spacing={10} mb={"1%"}>
                    <Text><strong>Test3 Course Outcomes :</strong></Text>
                    <Text>CO1: {props.data.test3.CO1}</Text>
                    <Text>CO2: {props.data.test3.CO2}</Text>
                    <Text>CO3: {props.data.test3.CO3}</Text>
                    <Text>CO4: {props.data.test3.CO4}</Text>
                    <Text>CO5: {props.data.test3.CO5}</Text>
                </HStack>
                <HStack spacing={10}>
                    <Text><strong>Test4 Course Outcomes :</strong></Text>
                    <Text>CO1: {props.data.test4.CO1}</Text>
                    <Text>CO2: {props.data.test4.CO2}</Text>
                    <Text>CO3: {props.data.test4.CO3}</Text>
                    <Text>CO4: {props.data.test4.CO4}</Text>
                    <Text>CO5: {props.data.test4.CO5}</Text>
                </HStack>
                </Box>
                <Flex>

                <Button onClick={editHandler} mr={"5%"}>Edit</Button>
                <Button onClick={deleteHandler} >Delete</Button>
                </Flex>
            </Flex>

            </Box>
        </>
    );
}

export default StudentCODisplay;