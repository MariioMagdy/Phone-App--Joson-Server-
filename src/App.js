import styles from "./App.module.css";
import UserCard from "./components/UserCard/UserCard";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import Userform from "./components/UserForm/Userform";
import Lightbox from "./components/Layout/Lightbox/Lightbox";

function App() {
  const [toggleLightbox, setToggle] = useState(false);
  const [Users, setUsers] = useState(() =>
    localStorage.getItem("users") === null
      ? []
      : JSON.parse(localStorage.getItem("users"))
  );

  const deleteHandler = (id) => {
    setUsers([...Users].filter((el) => el.id !== id));
  };

  // useEffect(() => {
  //   fetch("http://localhost:3005/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     });
  // }, []);

  const [selectedName, setSelectedName] = useState();

  const getId = (payload) => {
    switch (payload.type) {
      case "delete":
        deleteHandler(payload.id);
        break;
      case "edit":
        selectUser(payload.id);
        break;

      default:
        break;
    }
  };

  const selectUser = (id) => {
    //get selected user
    const selectedUser = Users.find((el) => el.id === id);
    console.log(selectedUser);
    setSelectedName(selectedUser);
    console.log(selectedName);
    setToggle(!toggleLightbox);
  };
  const updateHandler = (id) => {
    return id;
  };
  const closeBox = () => {
    setToggle(!toggleLightbox);
    setSelectedName();
  };

  const UsersLoop = Users.map((el) => (
    <UserCard
      {...el}
      key={el.id}
      getId={getId}
      close={closeBox}
      users={Users}
    ></UserCard>
  ));

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(Users));
  }, [Users]);

  const updateItemHandler = (data) => {
    console.log(data);
  };

  const userHandler = (data, type) => {
    console.log(type);
    if (type === "submit") {
      return setUsers([...Users, data]);
    } else {
      setUsers(
        Users.map((el) => {
          if (el.id === data.id) {
            return data;
          } else {
            return el;
          }
        })
      );
      console.log(Users);
    }

    console.log(data, type);
  };
  return (
    <>
      <div className={styles.search}>
        <h1>Phone Book</h1>
        <input type="text"></input>
        <button className={styles.button} onClick={() => setToggle(true)}>
          Add
        </button>
      </div>
      {toggleLightbox && (
        <Lightbox close={closeBox}>
          <Userform
            userHandler={userHandler} //first
            close={closeBox}
            update={updateHandler}
            updateCell={updateItemHandler}
            selectUser={selectedName}
          />
        </Lightbox>
      )}
      <Layout>{UsersLoop}</Layout>
    </>
  );
}

export default App;
