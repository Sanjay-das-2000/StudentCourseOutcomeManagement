import classes from "./NewSession.module.css";
import { addCOdata, getUsers,getCOdata } from "../api/api";

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    // VStack,
  } from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
    const courseCodeReducer = useSelector((state) => state.varify.courseCode);
  const yearReducer = useSelector((state) => state.varify.year);

    const Navigate = useNavigate();

      // const Session = useRef();
  const name = useRef();
  const rollno = useRef();
  // const CourseCode = useRef();
  const test1CO1 = useRef();
  const test1CO2 = useRef();
  const test1CO3 = useRef();
  const test1CO4 = useRef();
  const test1CO5 = useRef();
  const test2CO1 = useRef();
  const test2CO2 = useRef();
  const test2CO3 = useRef();
  const test2CO4 = useRef();
  const test2CO5 = useRef();
  const test3CO1 = useRef();
  const test3CO2 = useRef();
  const test3CO3 = useRef();
  const test3CO4 = useRef();
  const test3CO5 = useRef();
  const test4CO1 = useRef();
  const test4CO2 = useRef();
  const test4CO3 = useRef();
  const test4CO4 = useRef();
  const test4CO5 = useRef();
    const submitHandler = async (event) => {
        event.preventDefault();
    
        const studentname = name.current.value;
        const Rollno = rollno.current.value;
        // const courseCode = CourseCode.current.value;
        // const session = Session.current.value;
        const Test1CO1 = test1CO1.current.value;
        const Test1CO2 = test1CO2.current.value;
        const Test1CO3 = test1CO3.current.value;
        const Test1CO4 = test1CO4.current.value;
        const Test1CO5 = test1CO5.current.value;
        const Test2CO1 = test2CO1.current.value;
        const Test2CO2 = test2CO2.current.value;
        const Test2CO3 = test2CO3.current.value;
        const Test2CO4 = test2CO4.current.value;
        const Test2CO5 = test2CO5.current.value;
        const Test3CO1 = test3CO1.current.value;
        const Test3CO2 = test3CO2.current.value;
        const Test3CO3 = test3CO3.current.value;
        const Test3CO4 = test3CO4.current.value;
        const Test3CO5 = test3CO5.current.value;
        const Test4CO1 = test4CO1.current.value;
        const Test4CO2 = test4CO2.current.value;
        const Test4CO3 = test4CO3.current.value;
        const Test4CO4 = test4CO4.current.value;
        const Test4CO5 = test4CO5.current.value;
    
        const values = {
          _id: Rollno,
          year: yearReducer,
          coursecode: courseCodeReducer,
          name: studentname,
          rollno: Rollno,
          test1: {
            CO1: Test1CO1,
            CO2: Test1CO2,
            CO3: Test1CO3,
            CO4: Test1CO4,
            CO5: Test1CO5,
          },
          test2: {
            CO1: Test2CO1,
            CO2: Test2CO2,
            CO3: Test2CO3,
            CO4: Test2CO4,
            CO5: Test2CO5,
          },
          test3: {
            CO1: Test3CO1,
            CO2: Test3CO2,
            CO3: Test3CO3,
            CO4: Test3CO4,
            CO5: Test3CO5,
          },
          test4: {
            CO1: Test4CO1,
            CO2: Test4CO2,
            CO3: Test4CO3,
            CO4: Test4CO4,
            CO5: Test4CO5,
          },
        };
    
        try {
          const res = await addCOdata(values);
          alert("Data submitted successfully");
          Navigate("/studentinfo");
          console.log("Success add user", res);
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <>
            <Box className={classes.newsessionbox} width={"60vw"} m="auto">
        <form onSubmit={submitHandler}>
          <FormControl>
            <FormLabel>Student Name</FormLabel>
            <Input ref={name} borderColor={"gray"} type={"text"}></Input>
            <FormLabel>Roll No</FormLabel>
            <Input ref={rollno} borderColor={"gray"} type={"text"}></Input>
            {/* <FormLabel>Course Code</FormLabel>
            <Input ref={CourseCode} borderColor={"gray"} type={"text"}></Input> */}
            <Flex direction={"column"}>
              <FormLabel>Test1</FormLabel>
              <HStack>
                <Input
                  ref={test1CO1}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO1"
                ></Input>
                <Input
                  ref={test1CO2}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO2"
                ></Input>
                <Input
                  ref={test1CO3}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO3"
                ></Input>
                <Input
                  ref={test1CO4}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO4"
                  ></Input>
                <Input
                  ref={test1CO5}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO5"
                ></Input>
              </HStack>
              <FormLabel>Test2</FormLabel>
              <HStack>
                <Input
                  ref={test2CO1}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO1"
                ></Input>
                <Input
                  ref={test2CO2}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO2"
                  ></Input>
                <Input
                  ref={test2CO3}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO3"
                ></Input>
                <Input
                  ref={test2CO4}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO4"
                  ></Input>
                <Input
                  ref={test2CO5}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO5"
                ></Input>
              </HStack>
              <FormLabel>Test3</FormLabel>
              <HStack>
                <Input
                  ref={test3CO1}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO1"
                  ></Input>
                <Input
                  ref={test3CO2}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO2"
                ></Input>
                <Input
                  ref={test3CO3}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO3"
                  ></Input>
                <Input
                  ref={test3CO4}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO4"
                  ></Input>
                <Input
                  ref={test3CO5}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO5"
                ></Input>
              </HStack>
              <FormLabel>Test4</FormLabel>
              <HStack>
                <Input
                  ref={test4CO1}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO1"
                  ></Input>
                <Input
                  ref={test4CO2}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO2"
                ></Input>
                <Input
                  ref={test4CO3}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO3"
                  ></Input>
                <Input
                  ref={test4CO4}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO4"
                ></Input>
                <Input
                  ref={test4CO5}
                  borderColor={"gray"}
                  type="number"
                  placeholder="CO5"
                  ></Input>
              </HStack>
            </Flex>
            {/* <FormLabel>Session</FormLabel>
            <Input ref={Session} borderColor={"gray"} type={"text"}></Input> */}
            <Button
              mt={"2%"}
              colorScheme="teal"
              variant="solid"
              size={"md"}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box> 
              </>
    )
}

export default StudentForm;