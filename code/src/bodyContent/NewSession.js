import classes from "./NewSession.module.css";
import { addUser, getUserStatus } from "../api/api";
import {useNavigate} from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import {useDispatch } from "react-redux";
import {varifyActions} from "../store/VarifyCourse";


const NewSession = () => {
  const dispatch = useDispatch();
  let Navigate = useNavigate();

  const Programme = useRef();
  const Course = useRef();
  const Branch = useRef();
  const CourseInstructor = useRef();
  const Semester = useRef();
  const CourseCode = useRef();
  const Session = useRef();

  const submitHandler = async (event) => {
    event.preventDefault(); 
    const programme = Programme.current.value;
    const course = Course.current.value;
    const branch = Branch.current.value;
    const courseInstructor = CourseInstructor.current.value;
    const semester = Semester.current.value;
    const courseCode = CourseCode.current.value;
    const session = Session.current.value;

    const values = {
      _id: courseCode,
      programme: programme,
      coursename: course,
      branchname: branch,
      courseinstructorname: courseInstructor,
      semester: semester,
      coursecode: courseCode,
    }

    try {
      const res = await getUserStatus({ course: course });
      if(res.data){
        alert("Data already exist in database.");
        dispatch(varifyActions.saveCourseCode(courseCode));
        dispatch(varifyActions.saveYear(session));
        Navigate("/studentinfo");
      } else {
        try {
          const res = await addUser(values);
          dispatch(varifyActions.saveCourseCode(courseCode));
        dispatch(varifyActions.saveYear(session));
          console.log('Success add user', res);
          Navigate("/studentinfo");
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <>
      <Box className={classes.newsessionbox} width={"60vw"} m="auto">
        <form onSubmit={submitHandler}>
          <FormControl>
            <FormLabel>Programme</FormLabel>
            <Input ref={Programme} borderColor={"gray"} type={"text"}></Input>
            <FormLabel>Branch</FormLabel>
            <Input ref={Branch} borderColor={"gray"} type={"text"}></Input>
            <FormLabel>Semester</FormLabel>
            <Input ref={Semester} borderColor={"gray"} type={"text"}></Input>
            <FormLabel>Course</FormLabel>
            <Input ref={Course} borderColor={"gray"} type={"text"}></Input>
            <FormLabel>Course Code</FormLabel>
            <Input ref={CourseCode} borderColor={"gray"} type={"text"}></Input>
            <FormLabel>Course Instructor</FormLabel>
            <Input
              ref={CourseInstructor}
              borderColor={"gray"}
              type={"text"}
            ></Input>
            <FormLabel>Session</FormLabel>
            <Input ref={Session} borderColor={"gray"} type={"text"}></Input>
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
  );
};

export default NewSession;
