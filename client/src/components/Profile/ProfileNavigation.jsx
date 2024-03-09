import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
    { title: "Orders",icons:<ShoppingBagIcon /> },
    { title: "Payments",icons:<AccountBalanceWalletIcon /> },
    { title: "Notifications",icons:<NotificationsActiveIcon /> },
    { title: "Logout",icons:<LogoutIcon /> },

];

const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const navigate = useNavigate();
    const dispactch = useDispatch();

    const handleNavigate = (item) => {
        if(item.title === "Logout"){
            dispactch(logout());
            
            navigate("/");
        }else
            navigate(`/my-profile/${item.title.toLowerCase()}`)

    }
  return (
    <div>
        <Drawer variant={isSmallScreen?"temporary":"permanent"} onClose={handleClose} open={isSmallScreen?open:true} sx={{zIndex:-1}}>
            <div className="w-[50w] lg:w-[20vw] h-[90vh] flex flex-col mt-8 text-xl gap-8 pt-16">
                {menu.map((item,i) => <>
                    <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
                        {item.icons}
                        <span>{item.title}</span>
                    </div>
                    {i!==menu.length-1 && <Divider/>}
                </>)}
            </div>
        </Drawer>
    </div>
  );
};

export default ProfileNavigation;
