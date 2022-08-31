import React from "react";
import Lightbox from "../Layout/Lightbox/Lightbox";
import Userform from "../UserForm/Userform";
import styles from "./UserCard.module.css";
import { useState } from "react";

const UserCard = ({
  name,
  age,
  address,
  phone,
  deleteHandler,
  users,
  ...rest
}) => {
  const [toggleLightbox, setToggle] = useState(false);

  const deleteElement = (id) => {
    deleteHandler(id);
  };

  const closeBox = () => {
    setToggle(!toggleLightbox);
  };

  const updateItem = (id) => {
    rest.updateHandler(name);
    setToggle(!toggleLightbox);
  };

  return (
    <>
      <div className={styles["card-box"]}>
        <ul>
          <li>Name : {name}</li>
          <li>Age : {age}</li>
          <li>Address : {address}</li>
          <li>Number : {phone}</li>
        </ul>
        <button className={styles.btn} onClick={() => deleteElement(rest.id)}>
          X
        </button>
        <button className={styles.btnUpdate} onClick={() => updateItem()}>
          Update
        </button>
      </div>
      {toggleLightbox && (
        <Lightbox close={closeBox}>
          <Userform
            id={rest.id}
            name={name}
            age={age}
            address={address}
            phone={phone}
            updateItem={updateItem}
            users={users}
          />
        </Lightbox>
      )}
    </>
  );
};

export default UserCard;
