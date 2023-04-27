import React from "react";
import { UserMenuModal, NavOption, NavLink } from "./UserMenu.styled";
import { Link } from "react-router-dom";
//icons

import LogoutIcon from "@mui/icons-material/Logout";
import NoteIcon from "@mui/icons-material/Note";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
function UserMenu() {
  const handleLogOut = () => {
    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <UserMenuModal>
      <Link to="/Profile">
        {" "}
        <NavOption>
          <NavLink>Profile</NavLink>
          <ManageAccountsIcon className="nav-icon" />
        </NavOption>{" "}
      </Link>

      <NavOption>
        <NavLink>Venues</NavLink>
        <ApartmentIcon className="nav-icon" />
      </NavOption>

      <NavOption>
        <NavLink>My bookings</NavLink>
        <NoteIcon className="nav-icon" />
      </NavOption>

      <NavOption onClick={handleLogOut}>
        <NavLink>Log Out</NavLink>
        <LogoutIcon className="nav-icon" />
      </NavOption>
    </UserMenuModal>
  );
}

export default UserMenu;
