  import "react";
  import axios from "axios";
  import "./App.css";
  import { useEffect } from "react";

  // Protokol düzeltildi
  const BASE_URL = "http://localhost:3005"; 

  function App() {
    // eslint-disable-next-line no-unused-vars
    const getAllUsers = async () => {
      const response = await axios.get(BASE_URL + "/users");
      console.log(response.data);
    };
    // eslint-disable-next-line no-unused-vars
    const getUserById = async (userId) => {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      console.log(response.data);
    };

    // eslint-disable-next-line no-unused-vars
    const createUser = async(newUser)=>{
       const response = await axios.post(`${BASE_URL}/users`, newUser )
      console.log("response",response.data)

    }

    const updateUser = async(userId, updatedUser)=>{
      axios.put(`${BASE_URL}/users/${userId}`,updatedUser)


    }




    //  useEffect hook'u: Sadece App bileşeni içinde!
    useEffect(() => {
      //getUserById(3);
      // const newUser = {
      //   "username" : "aliveli",
      //   "password" : "123ali"
      // }
      // createUser(newUser);
      updateUser("1", {
        "username":"osmanali",
        "password":"osman123"

      });  
    }, []); //  dependency listesi eklendi!

    return (
      <div></div>
    );
  }
  export default App; 