import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../services/getUsers";
import { AppContext } from "../../../context/AppContext";

const Header = () => {
  const [users, setUsers] = useState([]);
  const { userLogged } = useContext(AppContext);
  console.log(userLogged);

  useEffect(() => {
    getUsers().then((data) => {
      console.log(users);
      setUsers(data);
    });
  }, []);

  return (
    <section className="header">
      <div>
        <h1>Home</h1>
        <p>¡Qué bueno verte {userLogged.username}!</p>
      </div>
      <figure>
        <img className="header-img" src={userLogged.avatar} alt="user" />
      </figure>
    </section>
  );
};

export default Header;
