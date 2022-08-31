import React from "react";
import styles from "./Userform.module.css";
import { useState } from "react";

const Userform = ({ insertHandler, close, id, users }) => {
  const [userData, setUserData] = useState({
    id: Date.now(),
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  console.log(users);
  const updateInput = (e) => {
    const inputKey = e.target.name;
    const inputValue = e.target.value;

    if (id) {
      const current = users.find((el) => id === el.id);
      return setUserData({
        ...current,
        id: current.id,
        [inputKey]: inputValue,
      });
    } else {
      return setUserData({ ...userData, [inputKey]: inputValue });
    }
  };

  // const [getID, setnewDataID] = useState();

  // const updateID = (id) => {
  //   updateItem(id);
  //   console.log(id);
  // };

  const newData = (e) => {
    e.preventDefault();
    insertHandler(userData);
    console.log(userData);
    close();
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Userform;
