import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge, IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { pink } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { store } from "../State/Store";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useSelector(store=>store);
  const user = store.getState().auth.user;

  // useEffect(()=>{
  //   console.log(store.getState());
  //   console.log(store.getState().auth.user);
  // },[auth]);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const navigateToProfile = () => {
    if(user.role === "ROLE_CUSTOMER"){
      navigate("/my-profile");
    }else{
      navigate("/admin/account");
    }
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Hangle Logout");
  };
  return (
    <nav className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          className="lg-mr-10 cursor-pointer flex items-center space-x-4"
          onClick={() => navigate("/")}
        >
          <li onClick={()=>navigate("/")} className="logo font-semibold text-gray-300 text-2xl">
            CanteenMaster
          </li>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
        {/* {true ? (
          <span
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={true ? handleOpenMenu : navigateToProfile}
            className="font-semibold cursor-pointer"
          >
            Welcome!
          </span>
        ) : (
          <IconButton>
            <PersonIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        )} */}

        {user ? (
          
          <span
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={true ? handleOpenMenu : navigateToProfile}
            className="flex
            gap-3 justify-center font-semibold cursor-pointer"
            style={{ alignItems: "center" }}
          >
            <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>{user?.fullName[0].toUpperCase()}</Avatar>
            <span>Welcome!</span>
          </span>
        ) : (
          <IconButton onClick={() => navigate("/account/login")}>
            <PersonIcon />
          </IconButton>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/my-profile")}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

        <IconButton onClick={() => navigate("/cart")}>
          <Badge color="black" badgeContent={3}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
    </nav>
  );
}
