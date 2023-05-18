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
            
        </>
    );
}

export default StudentCODisplay;