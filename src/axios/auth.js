import instance from ".";

export const registerUser = async (path, dataBody) => {
  try {
    const { data } = await instance.post("/register", dataBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (path, dataBody) => {
  try {
    const { data } = await instance.post("/login", dataBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};
