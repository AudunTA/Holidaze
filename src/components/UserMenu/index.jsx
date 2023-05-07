import React from "react";
import { UserMenuModal, NavOption, NavLink } from "./UserMenu.styled";
import { Link, Navigate } from "react-router-dom";
//icons
import LogoutIcon from "@mui/icons-material/Logout";
import NoteIcon from "@mui/icons-material/Note";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useSignOut } from "react-auth-kit";
//auth signout
//router-dom
import { useNavigate } from "react-router-dom";
function UserMenu() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut();
    navigate("/SignUp");
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
