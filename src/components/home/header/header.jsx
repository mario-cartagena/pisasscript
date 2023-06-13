import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../services/getUsers";
import { AppContext } from "../../../context/AppContext";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

export const Header = () => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if (name && name.includes(' ')) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }
    // Si el nombre no tiene al menos dos palabras, retorna un avatar vacío
    return {};
  }

  const [users, setUsers] = useState([]);
  const { userLogged, setIsLogged, setUserLogged } = useContext(AppContext);
  console.log(userLogged);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((data) => {
      console.log(users);
      setUsers(data);
    });
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuLogout = (event) => {
    if (anchorEl) {
      handleCloseMenu();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    setIsLogged(false);
    setUserLogged(null);
    navigate('/');
  }

  return (
    <section className="header">
      <div>
        <h1>Home</h1>
        <p>¡Qué bueno verte {userLogged?.username}!</p>
      </div>
      <figure onClick={handleMenuLogout}>
        {userLogged && userLogged.avatar ?
          <img className="header-img" src={userLogged?.avatar} alt="user" />
          :
          <Stack direction="row" spacing={2}>
            <Avatar onClick={handleMenuLogout} {...stringAvatar(`${userLogged?.fullName.toUpperCase()}`)} />
          </Stack>
        }
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleLogout}>   <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>Cerrar sesión</MenuItem>
        </Menu>

      </figure>
    </section>
  );
};

export default Header;
