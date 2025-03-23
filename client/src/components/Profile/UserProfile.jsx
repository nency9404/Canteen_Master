import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCartAction } from "../State/Cart/Action";

export default function UserProfile() {

  const dispatch = useDispatch();
    
    const handleLogout = () => {
      const email = sessionStorage.getItem("email");
      dispatch(clearCartAction(email));
    }

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">CanteenMaster</h1>
        <p>Email: <p>Priyanshiii@gmail.com</p>
        <p>Nency33@gmail.com</p>
                  
        </p>
        <Button variant="contained" onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
      </div>
    </div>
  );
}
