import React from "react";
import styles from "./Userform.module.css";
import { useState } from "react";

const Userform = ({
  insertHandler,
  close,
  id,
  name,
  age,
  address,
  phone,
  updateI,
}) => {
  const [userData, setUserData] = useState({
    name: name,
    age: age,
    address: address,
    phone: phone,
  });

  const updateInput = (e) => {
    const inputKey = e.target.name;
    const inputValue = e.target.value;

    setUserData({ ...userData, [inputKey]: inputValue });
  };

  const newData = (e) => {
    e.preventDefault();
    userData.id = Date.now();
    insertHandler(userData);
    close();
  };

  // updateItem(update);

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
