import classes from "./NewSession.module.css";
import { addCOdata, getUsers,getCOdata } from "../api/api";
import StudentCODisplay from "./StudentCODisplay";
import {
  Box,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewSession = () => {
  const [value, setValue] = useState([]);
  const [COvalue, setCOValue] = useState([]);
  // const [toggle, setToggle] = useState(false);

  const courseCodeReducer = useSelector((state) => state.varify.courseCode);
  const yearReducer = useSelector((state) => state.varify.year);
  
  const Navigate = useNavigate();

  const clickHandler = () => {
    // setToggle(toggle => { return !toggle})
    Navigate("/studentform");
  }

  useEffect(()=>{
    const GetUsers = async () => {
      try {
        const values = await getUsers({ courseCode: courseCodeReducer });
        const valuesArray = values.data.map((item) => ({
          id: item._id,
          coursename: item.coursename,
          programme: item.programme,
          courseinstructorname: item.courseinstructorname,
          coursecode: item.coursecode,
          semester: item.semester,
          branchname: item.branchname,
        }));
        setValue(valuesArray);
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
    const getCOhandler = async () => {
      try {
        const values = await getCOdata({ year: yearReducer });
        const valuesArray = values.data.map((item) => ({
          id: item._id,
          name: item.name,
          rollno: item.rollno,
          test1: item.test1,
          test2: item.test2,
          test3: item.test3,
          test4: item.test4,
        }));
        setCOValue(valuesArray);
      } catch (error) {
        console.log(error);
      }
    }
    getCOhandler();

  },[yearReducer,courseCodeReducer])

  const getCOhandler = async () => {
    try {
      const values = await getCOdata({ year: yearReducer });
      const valuesArray = values.data.map((item) => ({
        id: item._id,
        name: item.name,
        rollno: item.rollno,
        test1: item.test1,
        test2: item.test2,
        test3: item.test3,
        test4: item.test4,
      }));
      setCOValue(valuesArray);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Box height={"100%"} backgroundColor={"rgb(212, 225, 229)"} pb={"2%"}>
      {value.length !== 0 && (
        <Box w={"100vw"} h={"30vh"} backgroundColor={"white"} p={"2%"}>
          <Flex justify={"space-between"}>
            <Flex direction={"column"}  ml={"6%"}>
              <Heading fontSize={"1.5rem"} mb={"5%"}>
                Course Name : {value[0].coursename}
              </Heading>
              <Heading fontSize={"1.5rem"} mb={"5%"}>
                Course Code : {value[0].coursecode}
              </Heading>
              <Heading fontSize={"1.5rem"}>
                Course Instructor : {value[0].courseinstructorname}
              </Heading>
            </Flex>
            <Flex direction={"column"} mr={"10%"}>
              <Heading fontSize={"1.5rem"} mb={"10%"}>
                Semester : {value[0].semester}
              </Heading>
              <Heading fontSize={"1.5rem"}>
                Branch : {value[0].branchname}
              </Heading>
            </Flex>
          </Flex>
        </Box>
      )}
      <Button m={"2%"} onClick={clickHandler}>Add New Student</Button>
      {/* <Button m={"2%"} onClick={getCOhandler}>get CO data</Button> */}
      {COvalue.length !== 0 && COvalue.map((data, idx) => (
        <StudentCODisplay data={data} key={idx} getCOhandler={getCOhandler}/>
      ))}
      </Box>
    </>
  );
};

export default NewSession;
