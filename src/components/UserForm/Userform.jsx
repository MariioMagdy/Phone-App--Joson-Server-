import React, { useEffect } from "react";
import styles from "./Userform.module.css";
import { useState } from "react";

const Userform = ({ userHandler, close, id, users, selectUser }) => {
  // console.log(selectUser);
  const [userData, setUserData] = useState({
    id: Date.now(),
    name: "",
    age: "",
    address: "",
    phone: "",
  });
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");

  // console.log(selectUser);
  useEffect(() => {
    if (selectUser) {
      setUserData({
        id: selectUser.id,
        name: selectUser.name,
        age: selectUser.age,
        address: selectUser.address,
        phone: selectUser.phone,
      });
      return () => {
        setUserData({
          id: "",
          name: "",
          age: "",
          address: "",
          phone: "",
        });
      };
    }
    // console.log(selectUser);
  }, [selectUser]);

  // console.log(users);
  const updateInput = (e) => {
    const inputKey = e.target.name;
    const inputValue = e.target.value;
    return setUserData({ ...userData, [inputKey]: inputValue });
  };

  // const [getID, setnewDataID] = useState();

  // const updateID = (id) => {
  //   updateItem(id);
  //   console.log(id);
  // };

  const newData = (e) => {
    e.preventDefault();
    const oprationType = selectUser ? "edit" : "submit";
    if (selectUser) {
      userHandler(userData, oprationType);
      close();
    } else {
      userHandler(userData, oprationType, (userData.id = Date.now()));
      close();
    }

    console.log(userData);
  };

  // const updateI = () => {
  //   const up = setUserData({
  //     name: name,
  //     age: age,
  //     address: address,
  //     phone: phone,
  //   });
  // };
  // updateCell(updateI);

  return (
    <>
      <form className={styles.form} onSubmit={newData}>
        <input
          type="text"
          name="name"
          placeholder="Insert your Name"
          value={userData.name}
          onChange={updateInput}
        ></input>

        <input
          type="text"
          name="age"
          placeholder="Insert your Age"
          value={userData.age}
          onChange={updateInput}
        ></input>

        <input
          type="text"
          name="address"
          placeholder="Insert your Address"
          value={userData.address}
          onChange={updateInput}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Insert your Phone"
          value={userData.phone}
          onChange={updateInput}
        ></input>
        <input type="submit" value={selectUser ? "Edit" : "Submit"}></input>
      </form>
    </>
  );
};

export default Userform;
