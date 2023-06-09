import React, {useEffect, useState} from "react";
import { getUsers } from "../../../services/getUsers";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      console.log(users)
      setUsers(data)
    })
  }, [])

    return(
        <section className="header">
            {users.map((users,index)=>(
           <NavLink className="users" key={index}>
             <NavLink
                to={`/users/${users.id}`}
                state={users}
             >
             <div>
                <h1>Home</h1>
                <p>¡Qué bueno verte {users.username}!</p>
             </div>
                <figure>
                <img className="header-img" src={users.avatar} alt="user" />
                </figure>
             </NavLink>
            </NavLink> 
        ))}
        </section>
        
    );
};

export default Header;