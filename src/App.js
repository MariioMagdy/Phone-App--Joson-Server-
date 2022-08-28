import "./App.css";
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

  const insertHandler = (data) => {
    setUsers([...Users, data]);
  };

  const updateHandler = (id) => {
    return id;
  };
  const closeBox = () => {
    setToggle(!toggleLightbox);
  };

  const UsersLoop = Users.map((el) => (
    <UserCard
      {...el}
      key={el.id}
      deleteHandler={deleteHandler}
      updateHandler={updateHandler}
      close={closeBox}
    ></UserCard>
  ));

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(Users));
  }, [Users]);

  const updateItemHandler = () => {
    console.log("ff");
  };

  return (
    <>
      <button onClick={() => setToggle(true)}>Add</button>
      {toggleLightbox && (
        <Lightbox close={closeBox}>
          <Userform
            insertHandler={insertHandler}
            close={closeBox}
            update={updateHandler}
            updateI={updateItemHandler}
          />
        </Lightbox>
      )}
      <Layout>{UsersLoop}</Layout>
    </>
  );
}

export default App;
