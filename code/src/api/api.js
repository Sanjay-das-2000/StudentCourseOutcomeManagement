import axios from "axios";

const usersUrl = "http://localhost:8000";

export const getUserStatus = async (course) => {
    try {
        const obj = {
            url: `${usersUrl}/getuserStatus`,
            method: "POST",
            data: course,
        };
        const result = await axios(obj);
        return {
            success: true,
            data: result.data.value
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const addUser = async (user) => {
    try {
        const obj = {
            url: usersUrl,
            method: "POST",
            data: user,
        };
        const result = await axios(obj);
        return {
            success: true,
            data: result
        };
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
    try {
        const obj = {
            url: `${usersUrl}/${id}`,
            method: "PUT",
            data: user,
        };
        const result = await axios(obj);
        console.log(result);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

/////Student information sumiting funcitons ///////

export const addCOdata = async (user) => {
    try {
        const obj = {
            url: `${usersUrl}/addCOofUsers`,
            method: "POST",
            data: user,
        };
        const result = await axios(obj);
        return {
            success: true,
            data: result
        };
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const getUsers = async (courseCode) => {
    try {
        const obj = {
            url: `${usersUrl}/getusers`,
            method: "POST",
            data: courseCode,
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const getCOdata = async (year) => {
    try {
        const obj = {
            url: `${usersUrl}/getCOdata`,
            method: "POST",
            data: year,
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
};

export const getUserById = async (id) => {
    try {
        const obj = {
            url: `${usersUrl}/${id}`,
            method: "GET",
            data: id
        };
        const result = await axios(obj);
        return {
            status: true,
            data: result.data
        }
    } catch (error) {
        return {
            success: false,
            data: error
        }
    }
}
