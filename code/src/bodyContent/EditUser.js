import classes from "./NewSession.module.css";
import { getUserById, editUser } from "../api/api";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const inititialValue = {
  _id: "",
  year: "",
  coursecode: "",
  name: "",
  rollno: "",
  test1: { CO1: "", CO2: "", CO3: "", CO4: "", CO5: "" },
  test2: { CO1: "", CO2: "", CO3: "", CO4: "", CO5: "" },
  test3: { CO1: "", CO2: "", CO3: "", CO4: "", CO5: "" },
  test4: { CO1: "", CO2: "", CO3: "", CO4: "", CO5: ""},
};

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(inititialValue);

  const Navigate = useNavigate();
  useEffect(() => {
    const getuserdataHandler = async () => {
      try {
        const values = await getUserById(id);
        setUser(values.data);
      } catch (error) {
        console.log(error);
      }
    };
    getuserdataHandler();
  }, [id]);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await editUser(id, user);
      alert("Data edited successfully");
      Navigate("/studentinfo");
      console.log("Success add user", res);
    } catch (error) {
      console.log(error);
    }
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onRValueChange = (e) => {
    setUser({ ...user, _id: e.target.value, [e.target.name]: e.target.value });
  };
  const ontest1ValueChange = (e) => {
    setUser({
      ...user,
      test1: { ...user.test1, [e.target.name]: e.target.value },
    });
  };
  const ontest2ValueChange = (e) => {
    setUser({
      ...user,
      test2: { ...user.test2, [e.target.name]: e.target.value },
    });
  };
  const ontest3ValueChange = (e) => {
    setUser({
      ...user,
      test3: { ...user.test3, [e.target.name]: e.target.value },
    });
  };
  const ontest4ValueChange = (e) => {
    setUser({
      ...user,
      test4: { ...user.test4, [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      {user.length !== 0 && (
        <Box className={classes.newsessionbox} width={"60vw"} m="auto">
          <form onSubmit={submitHandler}>
            <FormControl>
              <FormLabel>Student Name</FormLabel>
              <Input
                name="name"
                borderColor={"gray"}
                type={"text"}
                value={user.name}
                onChange={(e) => onValueChange(e)}
              ></Input>
              <FormLabel>Roll No</FormLabel>
              <Input
                name="rollno"
                borderColor={"gray"}
                type={"text"}
                value={user.rollno}
                onChange={(e) => onRValueChange(e)}
              ></Input>
              {/* <FormLabel>Course Code</FormLabel>
            <Input ref={CourseCode} borderColor={"gray"} type={"text"}></Input> */}
              <Flex direction={"column"}>
                <FormLabel>Test1</FormLabel>
                <HStack>
                  <Input
                    name="CO1"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO1"
                    value={user.test1.CO1}
                    onChange={(e) => ontest1ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO2"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO2"
                    value={user.test1.CO2}
                    onChange={(e) => ontest1ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO3"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO3"
                    value={user.test1.CO3}
                    onChange={(e) => ontest1ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO4"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO4"
                    value={user.test1.CO4}
                    onChange={(e) => ontest1ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO5"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO5"
                    value={user.test1.CO5}
                    onChange={(e) => ontest1ValueChange(e)}
                  ></Input>
                </HStack>
                <FormLabel>Test2</FormLabel>
                <HStack>
                  <Input
                    name="CO1"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO1"
                    value={user.test2.CO1}
                    onChange={(e) => ontest2ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO2"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO2"
                    value={user.test2.CO2}
                    onChange={(e) => ontest2ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO3"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO3"
                    value={user.test2.CO3}
                    onChange={(e) => ontest2ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO4"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO4"
                    value={user.test2.CO4}
                    onChange={(e) => ontest2ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO5"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO5"
                    value={user.test2.CO5}
                    onChange={(e) => ontest2ValueChange(e)}
                  ></Input>
                </HStack>
                <FormLabel>Test3</FormLabel>
                <HStack>
                  <Input
                    name="CO1"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO1"
                    value={user.test3.CO1}
                    onChange={(e) => ontest3ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO2"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO2"
                    value={user.test3.CO2}
                    onChange={(e) => ontest3ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO3"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO3"
                    value={user.test3.CO3}
                    onChange={(e) => ontest3ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO4"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO4"
                    value={user.test3.CO4}
                    onChange={(e) => ontest3ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO5"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO5"
                    value={user.test3.CO5}
                    onChange={(e) => ontest3ValueChange(e)}
                  ></Input>
                </HStack>
                <FormLabel>Test4</FormLabel>
                <HStack>
                  <Input
                    name="CO1"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO1"
                    value={user.test4.CO1}
                    onChange={(e) => ontest4ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO2"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO2"
                    value={user.test4.CO2}
                    onChange={(e) => ontest4ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO3"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO3"
                    value={user.test4.CO3}
                    onChange={(e) => ontest4ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO4"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO4"
                    value={user.test4.CO4}
                    onChange={(e) => ontest4ValueChange(e)}
                  ></Input>
                  <Input
                    name="CO5"
                    borderColor={"gray"}
                    type="number"
                    placeholder="CO5"
                    value={user.test4.CO5}
                    onChange={(e) => ontest4ValueChange(e)}
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
                //   onClick={submitHandler}
                type="submit"
              >
                Edit User
              </Button>
            </FormControl>
          </form>
        </Box>
      )}
    </>
  );
};

export default EditUser;
